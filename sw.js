// Keeps the app working with no internet. Online, it always loads the newest version
// (and refreshes the saved copy); offline or on a slow connection, it uses the saved copy.
const CACHE = 'farkle-v16';   // keep in sync with APP_VERSION in index.html
const FILES = ['./', './index.html', './manifest.json', './icon-180.png', './icon-512.png'];
const NETWORK_TIMEOUT = 2500;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const fromNetwork = fetch(e.request, { cache: 'no-cache' }).then(res => {
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    });
    fromNetwork.catch(() => {});
    const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT));
    try {
      const res = await Promise.race([fromNetwork, timeout]);
      if (res) return res;
    } catch (err) { /* offline */ }
    const saved = await cache.match(e.request, { ignoreSearch: true });
    return saved || fromNetwork;
  })());
});
