#!/usr/bin/env python3
"""Busca leads no Google Maps usando só a biblioteca padrão do Python (nada de pip install).

Busca simples (a cidade é convertida em coordenadas automaticamente):
    python3 scripts/scrape.py "dentistas em São Paulo SP" --city "São Paulo, SP" --depth 5

Com redes sociais (Instagram / Facebook / LinkedIn, visitando o site de cada negócio):
    python3 scripts/scrape.py "dentistas em São Paulo SP" --city "São Paulo, SP" --depth 5 --socials

Várias buscas num job só (uma por linha no arquivo):
    python3 scripts/scrape.py --keywords-file examples/buscas.exemplo.txt --city "Curitiba, PR"

Notas:
- A API exige keywords, lat/lon (strings) e max_time (SEGUNDOS). O script preenche tudo.
- A geocodificação usa o OpenStreetMap Nominatim (grátis, sem chave). Ele permite ~1 req/s
  e exige um User-Agent descritivo (definido abaixo). Não faça loops agressivos.
- O resultado é salvo em leads/ como CSV separado por ";" com BOM UTF-8, que abre direto
  no Excel em português com os acentos certos. Use --sep "," para o formato internacional.
"""
import argparse, csv, io, json, os, re, sys, time, unicodedata, urllib.request, urllib.parse, urllib.error
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime

BASE = os.environ.get("SCRAPER_BASE_URL", "http://localhost:8080")
KEY = os.environ.get("SCRAPER_API_KEY", "")
# Só os campos que servem para contatar e qualificar um lead.
# O resto (coordenadas, IDs, horários, imagens, avaliações…) fica de fora por padrão.
LEAD = ["title", "phone", "whatsapp", "emails", "website", "category", "address",
        "review_rating", "review_count"]
SOCIALS = ["instagram", "facebook", "linkedin"]
# Cabeçalhos em português para o CSV final.
HEADERS_PT = {
    "title": "nome", "phone": "telefone", "whatsapp": "whatsapp", "emails": "email",
    "website": "site", "category": "categoria", "address": "endereco",
    "review_rating": "nota", "review_count": "avaliacoes",
    "instagram": "instagram", "facebook": "facebook", "linkedin": "linkedin",
}
UA = "scrapperleads/1.0 (baseado em github.com/Mahanaicoach/google-maps-scraper-kit)"


def req(method, path, body=None):
    headers = {"Content-Type": "application/json", "User-Agent": UA}
    if KEY:
        headers["X-API-Key"] = KEY
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(BASE + path, data=data, headers=headers, method=method)
    with urllib.request.urlopen(r, timeout=60) as resp:
        return resp.status, resp.read()


def geocode(place):
    """Nome de cidade -> ('lat','lon') como strings, via Nominatim, ou None."""
    q = urllib.parse.urlencode({"format": "json", "limit": 1, "q": place})
    url = f"https://nominatim.openstreetmap.org/search?{q}"
    r = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(r, timeout=30) as resp:
            hits = json.loads(resp.read())
        time.sleep(1)  # respeita o limite de ~1 req/s do Nominatim
        if hits:
            return str(hits[0]["lat"]), str(hits[0]["lon"])
    except Exception as e:
        print(f"  (falha na geocodificação: {e})", file=sys.stderr)
    return None


def collect_keywords(a):
    kws = []
    if a.keyword:
        kws.append(a.keyword)
    kws.extend(a.also or [])
    if a.keywords_file:
        with open(a.keywords_file, encoding="utf-8") as f:
            kws.extend(line.strip() for line in f if line.strip() and not line.startswith("#"))
    seen, out = set(), []
    for k in kws:
        if k not in seen:
            seen.add(k); out.append(k)
    return out


# ── Limpeza dos leads ─────────────────────────────────────────────────────────

def whatsapp_link(phone):
    """Telefone brasileiro -> link wa.me se for celular (DDD + 9 dígitos começando com 9)."""
    digits = re.sub(r"\D", "", phone or "")
    if digits.startswith("55") and len(digits) in (12, 13):
        digits = digits[2:]
    digits = digits.lstrip("0")
    if len(digits) == 11 and digits[2] == "9":
        return f"https://wa.me/55{digits}"
    return ""


def dedupe(rows):
    """Remove negócios repetidos (mesmo place_id/cid, ou mesmo nome + telefone)."""
    seen, out = set(), []
    for r in rows:
        key = (r.get("place_id") or r.get("cid") or "").strip()
        if not key:
            key = (r.get("title", "").strip().lower(), re.sub(r"\D", "", r.get("phone", "")))
        if key in seen:
            continue
        seen.add(key); out.append(r)
    return out


def slug(text):
    t = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:50] or "busca"


# ── Redes sociais (Instagram / Facebook / LinkedIn) — opcional ────────────────
# Só código (HTTP + regex): visita o site de cada negócio uma vez.
SOCIAL_RE = {
    "instagram": re.compile(r"https?://(?:www\.)?instagram\.com/([A-Za-z0-9_.]+)", re.I),
    "facebook":  re.compile(r"https?://(?:www\.|m\.|web\.|pt-br\.)?facebook\.com/([A-Za-z0-9_.\-]+)", re.I),
    "linkedin":  re.compile(r"https?://(?:[a-z]{2,3}\.)?linkedin\.com/(?:company|in|school)/([A-Za-z0-9_.\-%]+)", re.I),
}
_SKIP_HANDLE = {"", "home", "pages", "people", "help", "about", "policies", "policy",
                "legal", "tos", "privacy", "settings", "sharer", "tr", "profile.php",
                "plugins", "dialog", "intent", "login", "share.php", "sharer.php", "permalink.php",
                "p", "reel", "reels", "explore", "stories", "tv", "watch", "events",
                "groups", "marketplace", "gaming", "photo", "hashtag", "search"}


def _fetch_html(url, timeout=10):
    if not url:
        return ""
    if not url.startswith(("http://", "https://")):
        url = "http://" + url
    try:
        r = urllib.request.Request(url, headers={
            "User-Agent": "Mozilla/5.0 (compatible; " + UA + ")", "Accept": "text/html"})
        with urllib.request.urlopen(r, timeout=timeout) as resp:
            return resp.read(400_000).decode("utf-8", "replace")
    except Exception:
        return ""


def _find_socials(html):
    out = {p: "" for p in SOCIALS}
    for plat, rx in SOCIAL_RE.items():
        for m in rx.finditer(html or ""):
            h = m.group(1).lower()
            if h in _SKIP_HANDLE:
                continue
            if plat == "facebook" and (h.isdigit() or len(h) < 3):  # ignora lixo tipo /2008
                continue
            out[plat] = m.group(0).rstrip('"\'/').replace("\\", "")
            break
    return out


def enrich_socials(results, workers=8):
    for r in results:
        for p in SOCIALS:
            r.setdefault(p, "")
    todo = [r for r in results if r.get("website")]
    done = 0

    def work(r):
        r.update(_find_socials(_fetch_html(r["website"])))
    with ThreadPoolExecutor(max_workers=workers) as ex:
        for _ in ex.map(work, todo):
            done += 1
            print(f"\r  redes sociais: {done}/{len(todo)} sites verificados", end="", flush=True)
    print()


def main():
    ap = argparse.ArgumentParser(description="Busca leads (negócios) no Google Maps.")
    ap.add_argument("keyword", nargs="?", help='ex.: "dentistas em São Paulo SP"')
    ap.add_argument("lat", nargs="?", help="latitude (opcional se usar --city)")
    ap.add_argument("lon", nargs="?", help="longitude (opcional se usar --city)")
    ap.add_argument("--keyword", dest="also", action="append", help="busca extra (pode repetir)")
    ap.add_argument("--keywords-file", help="arquivo com uma busca por linha (lote)")
    ap.add_argument("--city", help='cidade para achar lat/lon, ex.: "Curitiba, PR"')
    ap.add_argument("--depth", type=int, default=5, help="profundidade (comece com 5)")
    ap.add_argument("--lang", default="pt", help="idioma dos resultados (padrão: pt)")
    ap.add_argument("--radius", type=int, default=10000, help="raio em metros (padrão: 10000)")
    # E-mail vem LIGADO por padrão (é o campo mais valioso). Visita o site de cada negócio,
    # então é mais lento. Use --no-email para uma busca rápida.
    ap.add_argument("--email", dest="email", action="store_true", default=True, help=argparse.SUPPRESS)
    ap.add_argument("--no-email", dest="email", action="store_false",
                    help="não procura e-mail (busca mais rápida)")
    ap.add_argument("--max-time", type=int, default=600, help="tempo máximo do job em SEGUNDOS")
    ap.add_argument("--out", default=None,
                    help="arquivo de saída (padrão: leads/<busca>-<data>.csv); .json grava JSON")
    ap.add_argument("--json", action="store_true", help="grava JSON em vez de CSV")
    ap.add_argument("--sep", default=";", help='separador do CSV (padrão ";" para Excel BR)')
    ap.add_argument("--full", action="store_true", help="mantém TODAS as colunas brutas")
    ap.add_argument("--fields", help="colunas brutas a manter, separadas por vírgula")
    ap.add_argument("--socials", action="store_true",
                    help="também procura Instagram/Facebook/LinkedIn no site de cada negócio (mais lento)")
    ap.add_argument("--proxy", action="append",
                    help="proxy (socks5://user:senha@host:porta), pode repetir; ajuda em buscas grandes")
    a = ap.parse_args()

    keywords = collect_keywords(a)
    if not keywords:
        sys.exit("✗ Nenhuma busca. Passe um termo, --keyword ou --keywords-file.")

    lat, lon = a.lat, a.lon
    if not (lat and lon):
        place = a.city or keywords[0]
        print(f"▶ Localizando \"{place}\"…")
        coords = geocode(place)
        if not coords:
            sys.exit("✗ Não achei as coordenadas. Passe lat/lon ou uma --city mais clara.")
        lat, lon = coords
        print(f"  → {lat}, {lon}")

    if a.email:
        print("ℹ Busca de e-mail LIGADA (visita o site de cada negócio; mais lento). "
              "Use --no-email para ir mais rápido.")

    # Avisa, mas não bloqueia: jobs grandes podem fazer o Google limitar o IP.
    if a.depth >= 15 or len(keywords) >= 10:
        print("⚠️  Atenção: busca grande (profundidade alta ou muitos termos).")
        print("    Rodar isso em sequência sem proxy pode fazer o Google limitar seu IP por algumas")
        print("    horas (os jobs voltam vazios ou falham). Para buscas grandes, use --proxy. Seguindo…\n")

    try:
        req("GET", "/api/v1/jobs")
    except Exception as e:
        sys.exit(f"✗ Scraper fora do ar em {BASE}. Rode 'docker compose up -d' antes.\n  ({e})")

    body = {"name": keywords[0][:60], "keywords": keywords, "lang": a.lang, "zoom": 15,
            "lat": str(lat), "lon": str(lon), "fast_mode": False, "radius": a.radius,
            "depth": a.depth, "email": a.email, "max_time": a.max_time}
    if a.proxy:
        body["proxies"] = a.proxy
    print(f"▶ Criando job: {len(keywords)} busca(s) @ {lat},{lon} profundidade={a.depth} email={a.email}")
    for k in keywords:
        print(f"    • {k}")
    try:
        _, raw = req("POST", "/api/v1/jobs", body)
    except urllib.error.HTTPError as e:
        sys.exit(f"✗ Falha ao criar o job: HTTP {e.code} — {e.read().decode()[:200]}")
    job_id = json.loads(raw).get("id")
    if not job_id:
        sys.exit("✗ A API não devolveu o id do job.")
    print(f"  id do job: {job_id}")

    print("▶ Aguardando terminar…")
    started, status = time.time(), None
    deadline = started + a.max_time + 300  # margem para o scraper fechar o arquivo
    while time.time() < deadline:
        _, raw = req("GET", f"/api/v1/jobs/{job_id}")
        status = json.loads(raw).get("Status")
        print(f"\r  status: {str(status):<10} ({int(time.time() - started)}s)", end="", flush=True)
        if status == "ok":
            print(); break
        if status == "failed":
            sys.exit("\n✗ O job falhou. Se repetir, o Google pode estar limitando seu IP: espere ou use --proxy.")
        time.sleep(8)
    else:
        sys.exit(f"\n✗ Tempo esgotado. O job {job_id} pode terminar depois; veja em {BASE}.")

    _, raw = req("GET", f"/api/v1/jobs/{job_id}/download")
    rows = list(csv.DictReader(io.StringIO(raw.decode("utf-8", "replace"))))
    total = len(rows)
    rows = dedupe(rows)
    for r in rows:
        r["whatsapp"] = whatsapp_link(r.get("phone", ""))

    if a.full:
        fields = list(rows[0].keys()) if rows else LEAD
    elif a.fields:
        fields = [c.strip() for c in a.fields.split(",") if c.strip()]
    else:
        fields = list(LEAD)
    results = [{k: r.get(k, "") for k in fields} for r in rows]
    dupes = total - len(results)
    print(f"✓ Pronto: {len(results)} negócios" + (f" ({dupes} duplicados removidos)" if dupes else "") + ".")

    if a.socials:
        print("▶ Procurando Instagram / Facebook / LinkedIn no site de cada negócio…")
        enrich_socials(results)
        fields = fields + SOCIALS
        found = sum(1 for r in results if any(r.get(p) for p in SOCIALS))
        print(f"  redes sociais encontradas para {found}/{len(results)} negócios")

    as_json = a.json or (a.out and a.out.lower().endswith(".json"))
    out = a.out
    if not out:
        os.makedirs("leads", exist_ok=True)
        out = os.path.join("leads", f"{slug(keywords[0])}-{datetime.now():%Y%m%d-%H%M}."
                                    + ("json" if as_json else "csv"))
    if as_json:
        with open(out, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
    else:
        # utf-8-sig (BOM) para o Excel reconhecer os acentos.
        with open(out, "w", newline="", encoding="utf-8-sig") as f:
            w = csv.writer(f, delimiter=a.sep)
            w.writerow([HEADERS_PT.get(k, k) for k in fields])
            w.writerows([[r.get(k, "") for k in fields] for r in results])
    print(f"  salvo em → {out}")
    for r in results[:5]:
        print(f"  • {r.get('title', '')} | {r.get('phone', '')} | {r.get('emails', '') or '—'} | "
              f"{r.get('website', '') or '—'}")


if __name__ == "__main__":
    main()
