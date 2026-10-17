/* ITCA · Guía Visual — helpers compartidos (tema, barra de lectura, reveal) */
(function(){
  var root = document.documentElement;
  var KEY = 'itca_theme'; // misma clave que el test → tema unificado
  try{ var saved = localStorage.getItem(KEY); if(saved) root.setAttribute('data-theme', saved); }catch(e){}

  function currentDark(){
    var t = root.getAttribute('data-theme');
    if(t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  }
  window.toggleTheme = function(){
    var next = currentDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try{ localStorage.setItem(KEY, next); }catch(e){}
    syncThemeIcon();
  };
  function syncThemeIcon(){
    var el = document.getElementById('themeIcon');
    if(el) el.textContent = currentDark() ? '☀️' : '🌙';
  }

  // Barra de progreso de lectura
  function onScroll(){
    var bar = document.getElementById('readbar');
    if(!bar) return;
    var h = document.documentElement;
    var max = (h.scrollHeight - h.clientHeight) || 1;
    bar.style.width = (100 * h.scrollTop / max) + '%';
  }

  // Reveal on scroll
  function initReveal(){
    var els = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0}); // umbral 0: las secciones muy largas nunca llegan a un % de visibilidad
    els.forEach(function(e){ io.observe(e); });
  }


  // Menú de módulos (común a todas las páginas): un solo lugar para vincular todo el sitio
  var PAGES = [
    ['1ª parte · Electricidad', [
      ['electricidad-basica.html','Electricidad básica'],['encendido.html','Sistema de encendido'],
      ['arranque-alternador.html','Arranque y alternador'],['bobinas.html','Bobinas y módulos'],['despiece.html','Despiece interactivo']]],
    ['2ª parte · Inyección', [
      ['sensores-funcionamiento.html','Sensores: cómo funcionan y se miden'],['sensores-motores.html','Sensores por motor (competencia)'],
      ['ecu-combustible.html','ECU y sistema de combustible'],['actuadores-emisiones.html','Actuadores, ralentí y emisiones']]],
    ['Practicar', [['index.html','Índice de la guía'],['../test-electricidad.html','Test interactivo ⚡']]]
  ];
  function initMenu(){
    var bar = document.querySelector('.hbar'); if(!bar || bar.querySelector('.navmenu')) return;
    var here = location.pathname.split('/').pop() || 'index.html';
    var h = '<summary class="navlink">Módulos ▾</summary><div class="navpop">';
    PAGES.forEach(function(g){
      h += '<span class="navgrp">'+g[0]+'</span>';
      g[1].forEach(function(p){ h += '<a href="'+p[0]+'"'+(p[0]===here?' class="here" aria-current="page"':'')+'>'+p[1]+'</a>'; });
    });
    var d = document.createElement('details'); d.className = 'navmenu'; d.innerHTML = h + '</div>';
    bar.insertBefore(d, bar.querySelector('.iconbtn'));
    document.addEventListener('click', function(e){ if(!d.contains(e.target)) d.removeAttribute('open'); });
  }


  // Índice lateral con scrollspy: se arma solo con las secciones .block que tienen h2
  function initToc(){
    var secs = [].slice.call(document.querySelectorAll('section.block')).filter(function(s){ return s.querySelector('h2'); });
    if(secs.length < 3) return;
    var items = secs.map(function(s, i){
      if(!s.id) s.id = 'sec-' + (i + 1);
      var n = s.querySelector('.kicker .num'), t = s.querySelector('h2').textContent.replace(/\s+/g, ' ').trim();
      return {s: s, n: n ? n.textContent.trim() : String(i + 1).padStart(2, '0'), t: t};
    });
    var list = items.map(function(it){
      return '<a href="#' + it.s.id + '"><span class="tn">' + it.n + '</span><span class="tt">' + it.t + '</span></a>';
    }).join('');
    var nav = document.createElement('nav'); nav.className = 'toc'; nav.setAttribute('aria-label', 'Índice de la página');
    nav.innerHTML = '<span class="toc-h">En esta página</span><div class="toc-rail"><i></i></div><div class="toc-list">' + list + '</div>';
    var fab = document.createElement('details'); fab.className = 'tocfab';
    fab.innerHTML = '<summary><span class="tn"></span><span class="tt"></span><span class="chev">▴</span></summary><div class="toc-list">' + list + '</div>';
    document.body.appendChild(nav); document.body.appendChild(fab);
    var links = [].slice.call(document.querySelectorAll('.toc a, .tocfab a'));
    links.forEach(function(a){ a.addEventListener('click', function(){ fab.removeAttribute('open'); }); });
    document.addEventListener('click', function(e){ if(!fab.contains(e.target)) fab.removeAttribute('open'); });
    var cur = -1, rail = nav.querySelector('.toc-rail i');
    function spy(){
      var y = window.innerHeight * 0.35, k = 0;
      items.forEach(function(it, i){ if(it.s.getBoundingClientRect().top <= y) k = i; });
      var h = document.documentElement, max = (h.scrollHeight - h.clientHeight) || 1;
      if(h.scrollTop >= max - 4) k = items.length - 1;
      rail.style.height = (100 * h.scrollTop / max) + '%';
      fab.classList.toggle('show', items[0].s.getBoundingClientRect().top < window.innerHeight * 0.6);
      if(k === cur) return; cur = k;
      links.forEach(function(a){ var on = a.getAttribute('href') === '#' + items[k].s.id; a.classList.toggle('on', on); if(on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
      fab.querySelector('summary .tn').textContent = items[k].n;
      fab.querySelector('summary .tt').textContent = items[k].t;
    }
    window.addEventListener('scroll', spy, {passive:true}); window.addEventListener('resize', spy, {passive:true}); spy();
  }

  document.addEventListener('DOMContentLoaded', function(){
    initMenu(); initToc(); syncThemeIcon(); initReveal(); onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll, {passive:true});
  });
})();
