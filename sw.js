self.addEventListener('install', function(event) {
    var CACHE_NAME = 'my-site-cache-v1'
    var urlsToCache = [
    '/',
    'main.css',
    'initializeSW.js',
    'index.html',
    'manifest.json',
    'sw.js',
    'content.js',
    'homescreen192.png',
    'maskable_homescreen192.png',
    'fonts/.'
    ]

    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
          console.log('Opened cache')
          return cache.addAll(urlsToCache)
      })
    )
  })

  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });