/* VIP CAR+ Seminovos — interações (JS puro) */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var WA = "5548991835650";
  var CARROS = {"bronco-sport": {"nome": "Ford Bronco Sport Wildtrak", "versao": "2.0 Turbo EcoBoost 4x4", "ano": "2023", "km": "59.900 km", "cambio": "Automático", "comb": "Gasolina", "preco": "R$ 179.900", "w": 750, "h": 1000, "itens": ["Motor 2.0 Turbo EcoBoost", "Tração 4x4 com seletor de terrenos G.O.A.T.", "Piloto automático adaptativo", "Ford Co-Pilot360", "Monitoramento de ponto cego", "Frenagem autônoma de emergência", "Central SYNC 4 com Apple CarPlay e Android Auto", "Painel digital", "Bancos em couro", "Teto solar", "Chave presencial e partida por botão", "Faróis em LED"], "cor": "cinza", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Ford%20Bronco%20Sport%20Wildtrak%202.0%20Turbo%20EcoBoost%204x4%202023%2C%20anunciado%20por%20R%24%20179.900.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "tera": {"nome": "Volkswagen Tera High", "versao": "1.0 170 TSI Flex", "ano": "2026", "km": "19.000 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 140.000", "w": 750, "h": 1000, "itens": ["Motor 1.0 TSI Flex", "Câmbio automático", "Apenas 19.000 km rodados"], "cor": "azul", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Volkswagen%20Tera%20High%201.0%20170%20TSI%20Flex%202026%2C%20anunciado%20por%20R%24%20140.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "hilux-srx": {"nome": "Toyota Hilux SRX", "versao": "2.8 Diesel 4x4 Cabine Dupla", "ano": "2024/2024", "km": "79.000 km", "cambio": "Automático", "comb": "Diesel", "preco": "R$ 290.000", "w": 750, "h": 1000, "itens": [], "cor": "branca", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Toyota%20Hilux%20SRX%202.8%20Diesel%204x4%20Cabine%20Dupla%202024/2024%2C%20anunciado%20por%20R%24%20290.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "eclipse-cross": {"nome": "Mitsubishi Eclipse Cross HPE Black", "versao": "1.5 Turbo", "ano": "2025/2026", "km": "200 km", "cambio": "Automático", "comb": "Gasolina", "preco": "R$ 185.000", "w": 1000, "h": 750, "itens": [], "cor": "cinza", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Mitsubishi%20Eclipse%20Cross%20HPE%20Black%201.5%20Turbo%202025/2026%2C%20anunciado%20por%20R%24%20185.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "corolla-xei": {"nome": "Toyota Corolla XEi", "versao": "2.0 Flex", "ano": "2023/2024", "km": "34.000 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 150.000", "w": 1000, "h": 750, "itens": [], "cor": "preto", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Toyota%20Corolla%20XEi%202.0%20Flex%202023/2024%2C%20anunciado%20por%20R%24%20150.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "c4-cactus": {"nome": "Citroën C4 Cactus Shine Pack", "versao": "1.6 THP Turbo Flex", "ano": "2024", "km": "14.000 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 99.000", "w": 750, "h": 1000, "itens": ["Motor 1.6 THP Turbo Flex", "Câmbio automático", "Painel digital", "Central multimídia", "Ar-condicionado digital", "Controle de cruzeiro", "Câmera de ré e sensores de estacionamento", "Chave presencial e partida por botão", "Faróis em LED", "Teto panorâmico", "Bancos em couro"], "cor": "prata", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Citro%C3%ABn%20C4%20Cactus%20Shine%20Pack%201.6%20THP%20Turbo%20Flex%202024%2C%20anunciado%20por%20R%24%2099.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "t-cross": {"nome": "Volkswagen T-Cross Highline", "versao": "1.4 TSI Flex", "ano": "2025", "km": "56.000 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 145.000", "w": 750, "h": 1000, "itens": ["Motor 1.4 TSI Flex", "Câmbio automático", "Painel digital", "Central multimídia VW Play", "Ar-condicionado digital", "Controle de cruzeiro", "Câmera de ré e sensores de estacionamento", "Chave presencial e partida por botão", "Faróis em LED", "Rodas de liga leve", "Bancos em couro"], "cor": "branco", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Volkswagen%20T-Cross%20Highline%201.4%20TSI%20Flex%202025%2C%20anunciado%20por%20R%24%20145.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "tiguan-allspace": {"nome": "Volkswagen Tiguan Allspace R-Line", "versao": "2.0 TSI", "ano": "2023/2024", "km": "37.160 km", "cambio": "Automático", "comb": "Gasolina", "preco": "R$ 230.000", "w": 1000, "h": 750, "itens": [], "cor": "cinza", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Volkswagen%20Tiguan%20Allspace%20R-Line%202.0%20TSI%202023/2024%2C%20anunciado%20por%20R%24%20230.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "tracker-ltz": {"nome": "Chevrolet Tracker LTZ", "versao": "1.0 Turbo", "ano": "2024/2025", "km": "15.000 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 130.000", "w": 1000, "h": 750, "itens": [], "cor": "branco", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Chevrolet%20Tracker%20LTZ%201.0%20Turbo%202024/2025%2C%20anunciado%20por%20R%24%20130.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "city-hatch": {"nome": "Honda City Hatchback EX", "versao": "1.5 Flex", "ano": "2024/2024", "km": "3.400 km", "cambio": "Automático", "comb": "Flex", "preco": "R$ 120.000", "w": 1000, "h": 750, "itens": [], "cor": "cinza", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Honda%20City%20Hatchback%20EX%201.5%20Flex%202024/2024%2C%20anunciado%20por%20R%24%20120.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "gol-last-edition": {"nome": "Volkswagen Gol Last Edition", "versao": "1.0 Flex", "ano": "2022/2023", "km": "7.000 km", "cambio": "Manual", "comb": "Flex", "preco": "R$ 100.000", "w": 1000, "h": 750, "itens": [], "cor": "vermelho", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Volkswagen%20Gol%20Last%20Edition%201.0%20Flex%202022/2023%2C%20anunciado%20por%20R%24%20100.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}, "hb20": {"nome": "Hyundai HB20 Comfort Plus", "versao": "1.0 Flex", "ano": "2025/2025", "km": "20.100 km", "cambio": "Manual", "comb": "Flex", "preco": "R$ 80.000", "w": 1000, "h": 563, "itens": [], "cor": "preto", "wa": "https://wa.me/5548991835650?text=Ol%C3%A1%21%20Vi%20no%20site%20da%20VIP%20CAR%2B%20o%20Hyundai%20HB20%20Comfort%20Plus%201.0%20Flex%202025/2025%2C%20anunciado%20por%20R%24%2080.000.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F"}};

  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var brl = function (v) { return "R$ " + Math.round(v).toLocaleString("pt-BR"); };
  var waLink = function (msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); };

  /* ---------- Topo ---------- */
  var topo = $("[data-topo]");
  var onScroll = function () { topo.classList.toggle("is-solid", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var menu = $("[data-menu]");
  var menuBtn = $("[data-menu-btn]");
  var setMenu = function (open) {
    menu.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    topo.classList.toggle("is-solid", open || window.scrollY > 40);
  };
  menuBtn.addEventListener("click", function () { setMenu(!menu.classList.contains("is-open")); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Estoque: filtros ---------- */
  var form = $("[data-filtros]");
  var grade = $("[data-grade]");
  var cards = $$(".car", grade);
  var resultado = $("[data-resultado]");
  var vazio = $("[data-vazio]");
  var verMais = $("[data-ver-mais]");
  var expandido = false;
  var tipoAtual = "";

  var norm = function (s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };

  function aplicar() {
    var q = norm(form.q.value.trim());
    var marca = form.marca.value;
    var faixa = form.preco.value ? form.preco.value.split("-").map(Number) : null;
    var ordem = form.ordem.value;
    var filtrando = !!(q || marca || faixa || tipoAtual);

    var ok = cards.filter(function (c) {
      var d = c.dataset, preco = Number(d.preco);
      if (q && norm(d.busca).indexOf(q) === -1) return false;
      if (marca && d.marca !== marca) return false;
      if (faixa && (preco < faixa[0] || preco > faixa[1])) return false;
      if (tipoAtual && d.tipo !== tipoAtual) return false;
      return true;
    });

    var chave = {
      destaque: function (a, b) { return a.dataset.ordem - b.dataset.ordem; },
      menor: function (a, b) { return a.dataset.preco - b.dataset.preco; },
      maior: function (a, b) { return b.dataset.preco - a.dataset.preco; },
      novo: function (a, b) { return (b.dataset.ano - a.dataset.ano) || (a.dataset.km - b.dataset.km); },
      km: function (a, b) { return a.dataset.km - b.dataset.km; }
    }[ordem];
    cards.slice().sort(chave).forEach(function (c) { grade.appendChild(c); });

    var limite = (filtrando || expandido || ordem !== "destaque") ? Infinity : 6;
    var mostrados = 0;
    cards.slice().sort(chave).forEach(function (c) {
      var visivel = ok.indexOf(c) !== -1 && mostrados < limite;
      c.hidden = !visivel;
      if (visivel) mostrados++;
    });

    resultado.textContent = ok.length === cards.length
      ? cards.length + " carros no estoque"
      : ok.length + (ok.length === 1 ? " carro encontrado" : " carros encontrados");
    vazio.hidden = ok.length !== 0;
    verMais.hidden = !(ok.length > mostrados);
  }

  form.addEventListener("input", aplicar);
  form.addEventListener("change", aplicar);
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  $$(".chip", form).forEach(function (chip) {
    chip.addEventListener("click", function () {
      tipoAtual = chip.dataset.tipo;
      $$(".chip", form).forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      aplicar();
    });
  });
  verMais.addEventListener("click", function () {
    expandido = true;
    var primeiroOculto = cards.filter(function (c) { return c.hidden; })[0];
    aplicar();
    if (primeiroOculto) { var b = $(".car__media", primeiroOculto); if (b) b.focus({ preventScroll: true }); }
  });
  aplicar();

  /* ---------- Galeria ---------- */
  var dlg = $("[data-galeria-dlg]");
  var gImg = $("[data-gal-img]", dlg);
  var gThumbs = $("[data-gal-thumbs]", dlg);
  var gPos = $("[data-gal-pos]", dlg);
  var fotos = [], atual = 0, origem = null;

  function mostrar(i) {
    atual = (i + fotos.length) % fotos.length;
    var f = fotos[atual];
    gImg.src = f.src; gImg.width = f.w; gImg.height = f.h; gImg.alt = f.alt;
    gPos.textContent = (atual + 1) + " / " + fotos.length;
    $$("button", gThumbs).forEach(function (b, k) { b.classList.toggle("is-on", k === atual); b.setAttribute("aria-current", k === atual ? "true" : "false"); });
  }

  function abrir(slug) {
    var c = CARROS[slug];
    if (!c) return;
    var base = "assets/img/carros/" + slug;
    fotos = [{ src: base + "-capa.webp", w: 800, h: 600, alt: c.nome + " " + c.cor + ", foto 1" }];
    for (var k = 1; k <= 4; k++) fotos.push({ src: base + "-" + k + ".webp", w: c.w, h: c.h, alt: c.nome + ", foto " + (k + 1) });

    gThumbs.innerHTML = "";
    fotos.forEach(function (f, k) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Ver foto " + (k + 1));
      var im = document.createElement("img");
      im.src = f.src; im.alt = ""; im.width = 72; im.height = 54; im.loading = "lazy";
      b.appendChild(im);
      b.addEventListener("click", function () { mostrar(k); });
      gThumbs.appendChild(b);
    });

    $("[data-gal-nome]", dlg).textContent = c.nome;
    $("[data-gal-ver]", dlg).textContent = c.versao;
    var ic = function (n) { return '<svg aria-hidden="true"><use href="#i-' + n + '"/></svg>'; };
    $("[data-gal-specs]", dlg).innerHTML =
      "<li>" + ic("calendar") + c.ano + "</li><li>" + ic("gauge") + c.km + "</li><li>" + ic("gear") + c.cambio + "</li><li>" + ic("fuel") + c.comb + "</li>";
    var itens = $("[data-gal-itens]", dlg);
    itens.innerHTML = "";
    var lista = c.itens.length ? c.itens : ["Peça a lista completa de itens e mais fotos pelo WhatsApp"];
    lista.forEach(function (t) { var li = document.createElement("li"); li.textContent = t; itens.appendChild(li); });
    $("[data-gal-preco]", dlg).textContent = c.preco;
    $("[data-gal-wa]", dlg).href = c.wa;

    mostrar(0);
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }

  function fechar() {
    if (typeof dlg.close === "function") dlg.close(); else { dlg.removeAttribute("open"); dlg.dispatchEvent(new Event("close")); }
  }
  dlg.addEventListener("close", function () {
    document.body.style.overflow = "";
    if (origem) origem.focus();
  });
  $$("[data-galeria]").forEach(function (btn) {
    btn.addEventListener("click", function () { origem = btn; abrir(btn.closest(".car").dataset.slug); });
  });
  $("[data-gal-fechar]", dlg).addEventListener("click", fechar);
  $("[data-gal-prev]", dlg).addEventListener("click", function () { mostrar(atual - 1); });
  $("[data-gal-next]", dlg).addEventListener("click", function () { mostrar(atual + 1); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) fechar(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
  var x0 = null;
  gImg.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  gImg.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) mostrar(atual + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  /* ---------- Simulador ---------- */
  var sim = $("[data-sim]");
  var TAXA = 0.0199;
  var inValor = $("[data-sim-valor]", sim);
  var inEntrada = $("[data-sim-entrada]", sim);
  var outEntrada = $("[data-sim-entrada-out]", sim);
  var selCarro = $("[data-sim-carro]", sim);
  var parse = function (s) { return Number(String(s).replace(/\D/g, "")) || 0; };

  function calcular() {
    var valor = parse(inValor.value);
    var pct = Number(inEntrada.value);
    var entrada = valor * pct / 100;
    var fin = Math.max(valor - entrada, 0);
    var n = Number((sim.querySelector('input[name="prazo"]:checked') || {}).value || 48);
    var parcela = fin > 0 ? fin * TAXA / (1 - Math.pow(1 + TAXA, -n)) : 0;

    inEntrada.setAttribute("aria-valuetext", brl(entrada) + ", " + pct + "% do valor");
    outEntrada.textContent = brl(entrada) + " (" + pct + "%)";
    $("[data-sim-parcela]", sim).innerHTML = brl(parcela) + " <small>/mês</small>";
    $("[data-sim-det]", sim).textContent = n + "x · valor financiado " + brl(fin);

    var carroTxt = selCarro.value ? selCarro.options[selCarro.selectedIndex].text.split(" · ")[0] : "um carro";
    var msg = "Olá! Fiz uma simulação no site da VIP CAR+ para " + carroTxt + ": valor " + brl(valor) +
      ", entrada de " + brl(entrada) + " e " + n + " parcelas de aproximadamente " + brl(parcela) +
      ". Podem fazer uma análise para mim?";
    $("[data-sim-wa]", sim).href = waLink(msg);
  }

  inValor.addEventListener("input", function () {
    var v = parse(inValor.value);
    inValor.value = v ? v.toLocaleString("pt-BR") : "";
    selCarro.value = "";
    calcular();
  });
  selCarro.addEventListener("change", function () {
    if (selCarro.value) inValor.value = Number(selCarro.value).toLocaleString("pt-BR");
    calcular();
  });
  inEntrada.addEventListener("input", calcular);
  $$('input[name="prazo"]', sim).forEach(function (r) { r.addEventListener("change", calcular); });
  sim.addEventListener("submit", function (e) { e.preventDefault(); });
  calcular();

  $$("[data-simular]").forEach(function (b) {
    b.addEventListener("click", function () {
      var preco = b.getAttribute("data-simular");
      selCarro.value = preco;
      if (selCarro.value !== preco) selCarro.value = "";
      inValor.value = Number(preco).toLocaleString("pt-BR");
      calcular();
      document.getElementById("financiamento").scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Revelar ao rolar ---------- */
  var alvos = $$(".sec-head, .vant__item, .depo, .sim, .sobre__foto, .local__mapa");
  if ("IntersectionObserver" in window) {
    alvos.forEach(function (el) { el.classList.add("revela"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-vis"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    alvos.forEach(function (el) { io.observe(el); });
  }

  var ano = $("[data-ano-atual]");
  if (ano) ano.textContent = new Date().getFullYear();
})();
