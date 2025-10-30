/* eslint-env service-worker */

const cacheName = 'v2025.1/ffconf/details';

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== cacheName)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('install', (e) => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache
        .addAll([
          '/details/',
          '/details/speaking/',
          '/covid/',
          '/code-of-conduct/',

          // css
          '/css/base.css',
          '/css/article.css',
          '/css/mq.css',
          '/css/details.css',

          // images
          '/images/leftlogic.svg',
          '/images/external.svg',
          '/images/logo.svg',
          '/images/favicons/favicon-16.png',

          // fonts
          '/fonts/BasierSquare-Medium-custom.woff2',
          '/fonts/BasierSquare-Medium-custom.woff',
          '/fonts/BasierSquare-Regular-custom.woff2',
          '/fonts/BasierSquare-Regular-custom.woff',
        ])
        .then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, try the network first,
// then fall back to the cache if the network fails
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // if we got a valid response, clone it and update the cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(cacheName).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // network failed, try the cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          console.log(
            'failed to fetch from network and cache',
            event.request.url
          );
        });
      })
  );
});
