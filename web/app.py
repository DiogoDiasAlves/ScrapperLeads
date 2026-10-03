#!/usr/bin/env python3
"""Página web do ScrapperLeads: formulário de busca + lista de buscas + download da planilha.

Só biblioteca padrão do Python. Fala com o scraper (gosom) pela API e reaproveita a limpeza
do scripts/scrape.py (duplicados, WhatsApp, redes sociais, CSV para Excel).

    SCRAPER_BASE_URL=http://localhost:8080 python3 web/app.py   # abre em http://localhost:3000
"""
import csv, io, json, os, sys, threading, time, uuid
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "scripts"))
import scrape  # noqa: E402

DATA_DIR = os.environ.get("DATA_DIR", os.path.join(ROOT, "leads"))
PORT = int(os.environ.get("PORT", "3000"))
HOST = os.environ.get("HOST", "127.0.0.1")
DB = os.path.join(DATA_DIR, "buscas.json")
MAX_DEPTH = 20
RUNNING = {"na fila", "localizando", "buscando", "redes sociais"}

lock = threading.Lock()
buscas = {}


def load():
    global buscas
    try:
        with open(DB, encoding="utf-8") as f:
            buscas = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        buscas = {}


def save():
    tmp = DB + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(buscas, f, ensure_ascii=False, indent=1)
    os.replace(tmp, DB)


def update(bid, **kw):
    with lock:
        buscas[bid].update(kw)
        save()


def run(bid):
    """Executa uma busca do começo ao fim, numa thread. Retoma do ponto certo após reinício."""
    b = buscas[bid]
    try:
        if not b.get("job_id"):
            update(bid, status="localizando")
            coords = scrape.geocode(b["cidade"])
            if not coords:
                return update(bid, status="falhou",
                              erro="Não consegui localizar a cidade. Confira o nome (\"Cidade, UF\") e a internet.")
            body = {"name": b["termo"][:60], "keywords": [b["termo"]], "lang": "pt", "zoom": 15,
                    "lat": coords[0], "lon": coords[1], "fast_mode": False, "radius": 10000,
                    "depth": b["depth"], "email": b["email"], "max_time": b["max_time"]}
            _, raw = scrape.req("POST", "/api/v1/jobs", body)
            update(bid, job_id=json.loads(raw)["id"], status="buscando")

        deadline = time.time() + b["max_time"] + 600
        while True:
            _, raw = scrape.req("GET", f"/api/v1/jobs/{buscas[bid]['job_id']}")
            st = json.loads(raw).get("Status")
            if st == "ok":
                break
            if st == "failed":
                return update(bid, status="falhou",
                              erro="O Google pode estar limitando o IP. Espere algumas horas ou use proxy.")
            if time.time() > deadline:
                return update(bid, status="falhou", erro="Demorou demais. Tente com profundidade menor.")
            time.sleep(8)

        _, raw = scrape.req("GET", f"/api/v1/jobs/{buscas[bid]['job_id']}/download")
        rows = list(csv.DictReader(io.StringIO(raw.decode("utf-8", "replace"))))
        fields = list(scrape.LEAD)
        results, dupes = scrape.clean_leads(rows, fields)
        if b["socials"] and results:
            update(bid, status="redes sociais", progresso="0%")
            scrape.enrich_socials(results, progress=lambda d, t: update(bid, progresso=f"{d * 100 // t}%"))
            fields += scrape.SOCIALS
        scrape.save_csv(os.path.join(DATA_DIR, f"{bid}.csv"), results, fields)
        update(bid, status="pronto", progresso="", total=len(results), duplicados=dupes,
               com_email=sum(1 for r in results if r.get("emails")),
               com_whatsapp=sum(1 for r in results if r.get("whatsapp")),
               terminou=datetime.now().isoformat(timespec="seconds"))
    except Exception as e:  # o scraper caiu, sem internet, etc.
        update(bid, status="falhou", erro=f"Erro: {e}")


def start(bid):
    threading.Thread(target=run, args=(bid,), daemon=True).start()


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write(f"[{datetime.now():%H:%M:%S}] {fmt % args}\n")

    def send(self, code, body, ctype="application/json; charset=utf-8", headers=None):
        if not isinstance(body, bytes):
            body = json.dumps(body, ensure_ascii=False).encode() if "json" in ctype else body.encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in (headers or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path in ("/", "/index.html"):
            with open(os.path.join(ROOT, "web", "index.html"), "rb") as f:
                return self.send(200, f.read(), "text/html; charset=utf-8")
        if self.path == "/api/buscas":
            with lock:
                items = sorted(buscas.values(), key=lambda b: b["criada"], reverse=True)
            return self.send(200, items)
        if self.path == "/api/status":
            try:
                scrape.req("GET", "/api/v1/jobs")
                return self.send(200, {"scraper": True})
            except Exception:
                return self.send(200, {"scraper": False})
        if self.path.startswith("/api/buscas/") and self.path.endswith("/csv"):
            bid = self.path.split("/")[3]
            b = buscas.get(bid)
            path = os.path.join(DATA_DIR, f"{bid}.csv")
            if not b or b.get("status") != "pronto" or not os.path.exists(path):
                return self.send(404, {"erro": "Planilha não encontrada."})
            name = f"{scrape.slug(b['termo'])}-{b['criada'][:10]}.csv"
            with open(path, "rb") as f:
                return self.send(200, f.read(), "text/csv; charset=utf-8", {
                    "Content-Disposition": f"attachment; filename=\"{name}\"; filename*=UTF-8''{quote(name)}"})
        self.send(404, {"erro": "Não encontrado."})

    def do_POST(self):
        if self.path != "/api/buscas":
            return self.send(404, {"erro": "Não encontrado."})
        try:
            n = int(self.headers.get("Content-Length", "0"))
            d = json.loads(self.rfile.read(min(n, 10_000)) or b"{}")
        except (ValueError, json.JSONDecodeError):
            return self.send(400, {"erro": "Pedido inválido."})
        nicho = str(d.get("nicho", "")).strip()[:100]
        cidade = str(d.get("cidade", "")).strip()[:100]
        if not nicho or not cidade:
            return self.send(400, {"erro": "Preencha o nicho e a cidade."})
        try:
            depth = max(1, min(MAX_DEPTH, int(d.get("depth", 5))))
        except (TypeError, ValueError):
            depth = 5
        email, socials = bool(d.get("email", True)), bool(d.get("socials", False))
        with lock:
            if any(b["status"] in RUNNING for b in buscas.values()):
                return self.send(409, {"erro": "Já tem uma busca rodando. Uma por vez evita bloqueio do Google."})
            bid = uuid.uuid4().hex[:12]
            buscas[bid] = {
                "id": bid, "nicho": nicho, "cidade": cidade,
                "termo": f"{nicho} em {cidade.replace(',', '')}",
                "depth": depth, "email": email, "socials": socials,
                "max_time": 300 + depth * 120 + (300 if email else 0),
                "status": "na fila", "criada": datetime.now().isoformat(timespec="seconds"),
            }
            save()
        start(bid)
        self.send(201, buscas[bid])

    def do_DELETE(self):
        if not self.path.startswith("/api/buscas/"):
            return self.send(404, {"erro": "Não encontrado."})
        bid = self.path.split("/")[3]
        with lock:
            b = buscas.get(bid)
            if not b:
                return self.send(404, {"erro": "Não encontrado."})
            if b["status"] in RUNNING:
                return self.send(409, {"erro": "Espere a busca terminar para apagar."})
            buscas.pop(bid)
            save()
        try:
            os.remove(os.path.join(DATA_DIR, f"{bid}.csv"))
        except FileNotFoundError:
            pass
        if b.get("job_id"):
            try:
                scrape.req("DELETE", f"/api/v1/jobs/{b['job_id']}")
            except Exception:
                pass
        self.send(200, {"ok": True})


def main():
    os.makedirs(DATA_DIR, exist_ok=True)
    load()
    for bid, b in buscas.items():  # retoma buscas interrompidas por reinício
        if b["status"] in RUNNING:
            start(bid)
    srv = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"ScrapperLeads no ar: http://localhost:{PORT}  (scraper em {scrape.BASE})", flush=True)
    srv.serve_forever()


if __name__ == "__main__":
    main()
