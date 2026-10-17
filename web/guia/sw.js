/* ITCA · Guía Visual — service worker de la ayuda rápida: la deja disponible sin señal.
   Red primero (siempre la versión más nueva si hay conexión), caché si no hay.
   Cambiar CACHE al agregar archivos a FILES. */
var CACHE = 'itca-movil-v3';
var FILES = ['competencia-movil.html', 'guia.css', 'guia.js', 'sensores-data.js', 'logo.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function(res){
    if(res.ok && new URL(e.request.url).origin === location.origin){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
    }
    return res;
  }).catch(function(){
    return caches.match(e.request, {ignoreSearch: true});
  }));
});
