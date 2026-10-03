/* Excellency Motors — interações do site (JS puro, sem bibliotecas) */
(function () {
  'use strict';

  var WA = '5548999447004';
  var TAXA = 0.0179; // taxa de referência ao mês (apenas para simulação)

  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  var brl = function (v, dec) {
    return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: dec ? 2 : 0, maximumFractionDigits: dec ? 2 : 0 });
  };
  var num = function (s) { return parseInt(String(s).replace(/\D/g, ''), 10) || 0; };
  var norm = function (s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  };
  var waLink = function (msg) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg); };

  /* ---------- Topo: fundo sólido ao rolar + menu mobile ---------- */
  var topbar = $('.topbar');
  var onScroll = function () { topbar.classList.toggle('is-solid', window.scrollY > 24); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var menuBtn = $('.menu-btn');
  var nav = $('#menu');
  var closeMenu = function () { nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Abrir menu'); };
  menuBtn.addEventListener('click', function () {
    var open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (open) topbar.classList.add('is-solid');
  });
  $$('#menu a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Estoque: filtros ---------- */
  var grid = $('#cars');
  var cars = $$('.car', grid);
  var fBusca = $('#f-busca'), fMarca = $('#f-marca'), fPreco = $('#f-preco'), fOrdem = $('#f-ordem');
  var count = $('#f-count'), vazio = $('#f-vazio'), maisWrap = $('.more'), maisBtn = $('#ver-mais');
  var chip = '';
  var expanded = false;
  var pageSize = function () { return window.matchMedia('(min-width: 980px)').matches ? 9 : 6; };

  function matches(c) {
    var d = c.dataset;
    var q = norm(fBusca.value.trim());
    if (q) {
      var words = q.split(/\s+/);
      for (var i = 0; i < words.length; i++) if (d.busca.indexOf(words[i]) === -1) return false;
    }
    if (fMarca.value && d.marca !== fMarca.value) return false;
    if (fPreco.value) {
      var r = fPreco.value.split('-'), p = +d.preco;
      if (p < +r[0] || p > +r[1]) return false;
    }
    if (chip === 'suv' && d.cat !== 'suv') return false;
    if (chip === 'util' && d.cat !== 'util') return false;
    if (chip === 'auto' && d.auto !== '1') return false;
    if (chip === 'unico' && d.unico !== '1') return false;
    return true;
  }

  function sortCars() {
    var o = fOrdem.value;
    var sorted = cars.slice().sort(function (a, b) {
      var A = a.dataset, B = b.dataset;
      if (o === 'menor') return A.preco - B.preco;
      if (o === 'maior') return B.preco - A.preco;
      if (o === 'km') return A.km - B.km;
      return A.ordem - B.ordem;
    });
    sorted.forEach(function (c) { grid.appendChild(c); });
    return sorted;
  }

  function apply() {
    var sorted = sortCars();
    var hits = sorted.filter(matches);
    var filtering = !!(fBusca.value.trim() || fMarca.value || fPreco.value || chip);
    var limit = (expanded || filtering) ? Infinity : pageSize();
    sorted.forEach(function (c) { c.hidden = true; });
    hits.forEach(function (c, i) { c.hidden = i >= limit; });
    count.innerHTML = '<b>' + hits.length + '</b> ' + (hits.length === 1 ? 'veículo' : 'veículos') + (filtering ? ' encontrados' : ' no pátio');
    vazio.hidden = hits.length > 0;
    maisWrap.hidden = hits.length <= limit;
    maisBtn.textContent = 'Ver todos os ' + hits.length + ' veículos';
  }

  var t;
  fBusca.addEventListener('input', function () { clearTimeout(t); t = setTimeout(apply, 120); });
  [fMarca, fPreco, fOrdem].forEach(function (el) { el.addEventListener('change', apply); });
  $$('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      chip = b.dataset.chip;
      $$('.chip').forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      apply();
    });
  });
  maisBtn.addEventListener('click', function () { expanded = true; apply(); });
  $('#f-limpar').addEventListener('click', function () {
    fBusca.value = ''; fMarca.value = ''; fPreco.value = ''; chip = '';
    $$('.chip').forEach(function (x, i) { x.classList.toggle('is-on', i === 0); });
    apply();
  });
  var lastSize = pageSize();
  window.addEventListener('resize', function () {
    var n = pageSize();
    if (!expanded && n !== lastSize) { lastSize = n; apply(); }
  });
  apply();

  /* ---------- Simulador de financiamento ---------- */
  var sValor = $('#sim-valor'), sEntrada = $('#sim-entrada'), sPct = $('#sim-pct');
  var sParcela = $('#sim-parcela'), sDet = $('#sim-detalhe'), sWa = $('#sim-wa'), sCar = $('#sim-car');
  var carNome = '';

  function fmtInput(el) {
    var v = num(el.value);
    el.value = v ? v.toLocaleString('pt-BR') : '';
  }

  function simular() {
    var valor = num(sValor.value);
    var entrada = Math.min(num(sEntrada.value), valor);
    var n = +($('input[name="prazo"]:checked') || { value: 48 }).value;
    var fin = Math.max(valor - entrada, 0);
    var parcela = fin > 0 ? fin * TAXA / (1 - Math.pow(1 + TAXA, -n)) : 0;
    sPct.textContent = valor ? Math.round(entrada / valor * 100) + '%' : '0%';
    sParcela.textContent = brl(parcela, true);
    sDet.textContent = 'Financiando ' + brl(fin) + ' em ' + n + 'x';
    var msg = 'Olá! Fiz uma simulação no site da Excellency Motors' + (carNome ? ' para o ' + carNome : '') +
      ': veículo de ' + brl(valor) + ', entrada de ' + brl(entrada) + ', em ' + n + 'x (parcela estimada de ' + brl(parcela, true) +
      '). Podem me ajudar com o financiamento?';
    sWa.href = waLink(msg);
  }

  [sValor, sEntrada].forEach(function (el) {
    el.addEventListener('input', function () { fmtInput(el); simular(); });
  });
  sValor.addEventListener('input', function () { carNome = ''; sCar.hidden = true; });
  $$('input[name="prazo"]').forEach(function (r) { r.addEventListener('change', simular); });

  // "Simular parcela" no card leva o valor do carro para o simulador
  $$('.car-sim').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = +b.dataset.valor;
      carNome = b.dataset.nome;
      sValor.value = v.toLocaleString('pt-BR');
      sEntrada.value = Math.round(v * 0.3 / 100) * 100 ? (Math.round(v * 0.3 / 100) * 100).toLocaleString('pt-BR') : '';
      sCar.textContent = 'Simulando: ' + carNome + ' · ' + brl(v);
      sCar.hidden = false;
      simular();
      $('#financiamento').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });
  simular();

  /* ---------- Ano no rodapé ---------- */
  var ano = $('#ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- Revelar ao rolar ---------- */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var els = $$('.section-head, .perk, .sim, .finance-copy, .score, .quote, .mosaic, .about-copy, .loc-card, .map');
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }
})();
