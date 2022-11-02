/* eslint-env service-worker */

const cacheName = 'v2022.1/ffconf/details';

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

          // css
          '/css/base.css',
          '/css/article.css',
          '/css/mq.css',
          '/css/details.css',

          // images
          '/images/leftlogic.svg',
          '/images/external.svg',
          '/images/logo.svg',

          // fonts
          '/fonts/basiersquare-medium-webfont.woff2',
          '/fonts/basiersquare-regular-webfont.woff2',
        ])
        .then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((res) => {
        return res || fetch(event.request);
      });
    })
  );
});
