/* BestCar Multimarcas — interações do site (JS puro, sem bibliotecas) */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var WA = window.BESTCAR_WA || "554834787854";
  var fmt = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });
  var brl = function (v) { return "R$ " + fmt.format(Math.round(v)); };
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var norm = function (s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };
  var waLink = function (msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); };
  var temUrl = /^https?:$/.test(location.protocol);
  var dados = {};
  try { dados = JSON.parse($("#dados-carros").textContent); } catch (e) { dados = {}; }

  /* ---------- topo e menu ---------- */
  var topo = $("#topo");
  var menu = $("#menu");
  var menuBtn = $(".menu-btn");
  var onScroll = function () { topo.classList.toggle("is-rolado", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var fecharMenu = function () {
    menu.classList.remove("is-aberto");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
  };
  menuBtn.addEventListener("click", function () {
    var aberto = menu.classList.toggle("is-aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
    menuBtn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", fecharMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharMenu(); });

  /* ---------- link do carro na mensagem do WhatsApp (quando publicado) ---------- */
  if (temUrl) {
    $$("[data-wa-carro]").forEach(function (a) {
      var d = dados[a.getAttribute("data-wa-carro")];
      if (d) a.href = waLink(d.msg + "\n" + location.origin + location.pathname + "#carro-" + a.getAttribute("data-wa-carro"));
    });
  }

  /* ---------- estoque: filtros ---------- */
  var grade = $("#grade");
  var cards = $$(".carro", grade);
  var total = cards.length;
  var INICIAIS = window.matchMedia("(max-width: 639px)").matches ? 6 : 9;
  var expandido = false;
  var tipoAtual = "";
  var fBusca = $("#f-busca"), fMarca = $("#f-marca"), fPreco = $("#f-preco"), fOrdem = $("#f-ordem");
  var resultado = $("#resultado"), vazio = $("#vazio"), mais = $(".mais"), verMais = $("#ver-mais");

  function filtrosAtivos() {
    return fBusca.value.trim() !== "" || fMarca.value !== "" || fPreco.value !== "" || tipoAtual !== "";
  }

  function aplicar() {
    var termos = norm(fBusca.value).split(/\s+/).filter(Boolean);
    var marca = fMarca.value;
    var faixa = fPreco.value ? fPreco.value.split("-").map(Number) : null;
    var ordem = fOrdem.value;

    var lista = cards.slice().sort(function (a, b) {
      var A = a.dataset, B = b.dataset;
      if (ordem === "preco-asc") return A.preco - B.preco;
      if (ordem === "preco-desc") return B.preco - A.preco;
      if (ordem === "ano-desc") return (B.ano - A.ano) || (A.km - B.km);
      if (ordem === "km-asc") return A.km - B.km;
      return A.ordem - B.ordem;
    });
    lista.forEach(function (c) { grade.appendChild(c); });

    var batem = lista.filter(function (c) {
      var d = c.dataset;
      var busca = norm(d.busca);
      if (termos.length && !termos.every(function (t) { return busca.indexOf(t) !== -1; })) return false;
      if (marca && d.marca !== marca) return false;
      if (tipoAtual && d.tipo !== tipoAtual) return false;
      if (faixa && (Number(d.preco) < faixa[0] || Number(d.preco) > faixa[1])) return false;
      return true;
    });

    var limitar = !expandido && !filtrosAtivos() && ordem === "ordem";
    cards.forEach(function (c) { c.hidden = true; });
    batem.forEach(function (c, i) { c.hidden = limitar && i >= INICIAIS; });

    var n = batem.length;
    if (filtrosAtivos()) {
      resultado.textContent = n === 1 ? "1 carro encontrado" : n + " carros encontrados";
    } else if (limitar) {
      resultado.textContent = Math.min(INICIAIS, n) + " de " + total + " carros";
    } else {
      resultado.textContent = total + " carros no estoque";
    }
    vazio.hidden = n !== 0;
    mais.hidden = !(limitar && n > INICIAIS);
  }

  [fBusca, fMarca, fPreco, fOrdem].forEach(function (el) {
    el.addEventListener(el === fBusca ? "input" : "change", aplicar);
  });
  $$(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      tipoAtual = chip.dataset.tipo;
      $$(".chip").forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", String(on));
      });
      aplicar();
    });
  });
  verMais.addEventListener("click", function () {
    expandido = true;
    aplicar();
    var prox = cards.filter(function (c) { return Number(c.dataset.ordem) === INICIAIS + 1; })[0];
    if (prox) prox.querySelector(".carro__foto").focus({ preventScroll: true });
  });
  $("#limpar").addEventListener("click", function () {
    fBusca.value = ""; fMarca.value = ""; fPreco.value = ""; tipoAtual = "";
    $$(".chip").forEach(function (c, i) { c.classList.toggle("is-on", i === 0); c.setAttribute("aria-pressed", String(i === 0)); });
    aplicar();
  });
  aplicar();

  /* ---------- ficha do carro (modal) ---------- */
  var ficha = $("#ficha");
  var trilho = $("#ficha-trilho");
  var atual = null;

  function abrirFicha(slug, atualizarUrl) {
    var d = dados[slug];
    if (!d || !ficha.showModal) return;
    atual = slug;
    $("#ficha-marca").textContent = d.marca + " · " + d.tipo;
    $("#ficha-titulo").textContent = d.modelo + " " + d.ano;
    $("#ficha-versao").textContent = d.versao;
    $("#ficha-selos").innerHTML = d.selos.map(function (s) { return "<span>" + s + "</span>"; }).join("");
    var specs = [["Ano", d.ano], ["Km", d.km], ["Câmbio", d.cambio], ["Combustível", d.comb], ["Cor", d.cor], ["Tipo", d.tipo]];
    $("#ficha-specs").innerHTML = specs.map(function (s) { return "<div><dt>" + s[0] + "</dt><dd>" + s[1] + "</dd></div>"; }).join("");
    $("#ficha-obs").textContent = d.obs ? "“" + d.obs + "”" : "";
    var opc = d.opc.length ? d.opc : ["Consulte a lista completa de itens pelo WhatsApp"];
    var LIM = 12;
    $("#ficha-opc").innerHTML = opc.map(function (o, i) {
      return "<li" + (i >= LIM ? " hidden" : "") + '><svg aria-hidden="true"><use href="#i-check"/></svg>' + o + "</li>";
    }).join("");
    var todos = $("#ficha-todos");
    todos.hidden = opc.length <= LIM;
    todos.textContent = "Ver todos os " + opc.length + " itens";
    $("#ficha-preco").textContent = d.preco;
    var msg = d.msg + (temUrl ? "\n" + location.origin + location.pathname + "#carro-" + slug : "");
    $("#ficha-wa").href = waLink(msg);
    var alt = d.marca + " " + d.modelo + " " + d.versao + " " + d.ano + " " + d.cor.toLowerCase() + " na BestCar Multimarcas, Criciúma";
    trilho.innerHTML = d.gal.map(function (g, i) {
      return '<figure><img src="' + g[0] + '" width="' + g[1] + '" height="' + g[2] + '" alt="' + alt + " (foto " + (i + 1) + ')"' +
        (i ? ' loading="lazy"' : "") + ' decoding="async"><figcaption>' + (i + 1) + " / " + d.gal.length + "</figcaption></figure>";
    }).join("");
    trilho.scrollLeft = 0;
    ficha.showModal();
    ficha.querySelector(".ficha__in").scrollTop = 0;
    if (atualizarUrl !== false && history.replaceState) history.replaceState(null, "", "#carro-" + slug);
  }

  function fecharFicha() {
    if (ficha.open) ficha.close();
  }
  ficha.addEventListener("close", function () {
    if (history.replaceState && /^#carro-/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
    var card = atual && document.getElementById("carro-" + atual);
    if (card) card.querySelector(".carro__foto").focus({ preventScroll: true });
  });
  ficha.addEventListener("click", function (e) {
    if (e.target === ficha || e.target.closest("[data-fechar]")) fecharFicha();
  });
  $$("[data-nav]", ficha).forEach(function (b) {
    b.addEventListener("click", function () {
      trilho.scrollBy({ left: Number(b.dataset.nav) * trilho.clientWidth, behavior: "smooth" });
    });
  });
  $("#ficha-todos").addEventListener("click", function () {
    $$("#ficha-opc li[hidden]").forEach(function (li) { li.hidden = false; });
    this.hidden = true;
  });
  trilho.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      trilho.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * trilho.clientWidth, behavior: "smooth" });
    }
  });
  grade.addEventListener("click", function (e) {
    var b = e.target.closest("[data-abrir]");
    if (b) abrirFicha(b.getAttribute("data-abrir"));
  });
  $("#ficha-simular").addEventListener("click", function () {
    var d = dados[atual];
    fecharFicha();
    if (d) escolherCarro(String(d.valor));
    document.getElementById("financiamento").scrollIntoView({ behavior: "smooth" });
  });
  function abrirPeloHash() {
    if (!/^#carro-/.test(location.hash)) return;
    var slug = location.hash.slice(7);
    if (!dados[slug] || ficha.open) return;
    var card = document.getElementById("carro-" + slug);
    if (card) { card.hidden = false; card.scrollIntoView({ block: "center" }); }
    abrirFicha(slug, false);
  }
  window.addEventListener("hashchange", abrirPeloHash);
  abrirPeloHash();

  /* ---------- simulador de financiamento ---------- */
  var TAXA = 0.0199;
  var sCarro = $("#s-carro"), sValor = $("#s-valor"), sEntrada = $("#s-entrada");
  var sParcela = $("#s-parcela"), sDet = $("#s-det"), sWa = $("#s-wa");
  var num = function (el) { return Number((el.value || "").replace(/\D/g, "")) || 0; };
  var mascara = function (el) {
    var v = num(el);
    el.value = v ? fmt.format(v) : "";
  };

  function calcular() {
    var valor = num(sValor);
    var entrada = Math.min(num(sEntrada), valor);
    var prazo = Number(($("input[name=prazo]:checked") || { value: 48 }).value);
    var pv = Math.max(valor - entrada, 0);
    var parcela = pv > 0 ? pv * TAXA / (1 - Math.pow(1 + TAXA, -prazo)) : 0;
    sParcela.textContent = brl(parcela);
    sDet.textContent = pv > 0 ? "Financiando " + brl(pv) + " em " + prazo + "x" : "Informe o valor do carro e a entrada";
    var nomeCarro = sCarro.selectedIndex > 0 ? sCarro.options[sCarro.selectedIndex].text.split(" · ")[0] : "";
    var msg = "Olá, BestCar! Fiz uma simulação no site" + (nomeCarro ? " para o " + nomeCarro : "") +
      ": valor " + brl(valor) + ", entrada " + brl(entrada) + ", " + prazo + "x de aproximadamente " + brl(parcela) +
      ". Podem me ajudar com o financiamento?";
    sWa.href = waLink(msg);
  }

  function escolherCarro(valor) {
    var opt = $$("option", sCarro).filter(function (o) { return o.value === valor; })[0];
    if (opt) sCarro.value = valor;
    var v = Number(valor) || 0;
    if (v) {
      sValor.value = fmt.format(v);
      sEntrada.value = fmt.format(Math.round(v * 0.3 / 100) * 100);
    }
    calcular();
  }

  sCarro.addEventListener("change", function () { if (sCarro.value) escolherCarro(sCarro.value); });
  [sValor, sEntrada].forEach(function (el) {
    el.addEventListener("input", function () { mascara(el); calcular(); });
  });
  sValor.addEventListener("input", function () { sCarro.value = ""; });
  $$("input[name=prazo]").forEach(function (r) { r.addEventListener("change", calcular); });
  calcular();

  /* ---------- botão flutuante: some no rodapé para não cobrir os contatos ---------- */
  var flut = $(".wa-flutuante");
  var rodape = $(".rodape");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { flut.classList.toggle("is-oculto", en.isIntersecting); });
    }, { threshold: 0.25 }).observe(rodape);

    /* animação de entrada */
    var alvos = $$(".sec-cab, .difs__lista li, .difs__cta, .fin__texto, .sim, .aval__nota, .depo, .sobre__foto, .sobre__texto, .local__in");
    alvos.forEach(function (el) { el.classList.add("rv"); });
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visivel"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    alvos.forEach(function (el) { io.observe(el); });
  }
})();
