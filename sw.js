// Caches the app shell only. Microsoft sign-in, Graph and fonts are never touched.
var C='so-shell-1';
var SHELL=['./','index.html','config.js','manifest.webmanifest','icon.svg','icon-180.png','icon-192.png','icon-512.png','vendor/jszip.min.js','vendor/msal-browser.min.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match('index.html')})}));
});
