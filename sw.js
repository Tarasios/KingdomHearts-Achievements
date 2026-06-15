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

self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Let the browser handle anything cross-origin or not a heavy static asset.
  if (url.origin !== location.origin || !HEAVY.test(url.pathname)) return;
  e.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req).then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;   // cache first, fall back to network
      })
    )
  );
});
