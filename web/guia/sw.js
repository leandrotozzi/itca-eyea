/* ITCA · Guía Visual — la ayuda rápida del celular (con modo offline) se sacó.
   Este service worker solo existe para desinstalar el viejo en los celulares que lo tenían:
   borra su caché, se da de baja y recarga las pestañas abiertas. */
self.addEventListener('install', function(){ self.skipWaiting(); });

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.registration.unregister(); }).then(function(){
    return self.clients.matchAll({type: 'window'});
  }).then(function(cs){ cs.forEach(function(c){ c.navigate(c.url); }); }));
});
