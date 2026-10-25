/*
 * MaxApki were published at /Anki/ until they moved to /maxapki/. A device
 * that still has the old worker of /Anki/ gets this one, which removes the
 * files of /Anki/ from the offline copy and then itself. The app at
 * /maxapki/ keeps its copy under the same cache names, so only the files of
 * this address are removed, and a cache only once it is empty.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  const scope = self.registration.scope;
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith('times-table-cards-'))
            .map(async (k) => {
              const cache = await caches.open(k);
              const requests = await cache.keys();
              await Promise.all(requests.filter((r) => r.url.startsWith(scope)).map((r) => cache.delete(r)));
              if ((await cache.keys()).length === 0) await caches.delete(k);
            })
        )
      )
      .then(() => self.registration.unregister())
  );
});
