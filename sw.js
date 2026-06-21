/* =====================================================================
   Lightweight caching for faster repeat loads.

   Only the large, rarely-changing game-data modules and images are cached,
   stale-while-revalidate: they return instantly from the cache and refresh
   in the background, so the next load picks up any change. Everything else
   (HTML, CSS, the tracker engines, language JSON) is left to the normal
   network + HTTP cache, so code and text stay fresh while online.

   Bump VERSION to discard old caches.
   ===================================================================== */
const VERSION = "kh-cache-v1";
const HEAVY = /(?:-tracker-data|kh-melding-data)\.js$|\/images\//;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => event.waitUntil(
  caches.keys()
    .then((cacheNames) => Promise.all(cacheNames.filter((name) => name !== VERSION).map((name) => caches.delete(name))))
    .then(() => self.clients.claim())
));

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  // Let the browser handle anything cross-origin or not a heavy static asset.
  if (url.origin !== location.origin || !HEAVY.test(url.pathname)) return;
  event.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(request).then((cached) => {
        const fromNetwork = fetch(request).then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        }).catch(() => cached);
        return cached || fromNetwork;   // cache first, fall back to network
      })
    )
  );
});
