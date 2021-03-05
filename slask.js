/* OLD button anim */
$('.button').on("click", function(e) {  /* click function for NEXT button */
    nextContent(contentArr, $(this).data('id'))
    e.preventDefault()

    if ($(this).data('id') == 'Prev') {
        $(this).children("div:nth-child(1)").css({ /* button animation */
            "margin-right": "15px",
        })
        setTimeout(() => {
            $(this).children("div:nth-child(1)").css({
                "margin-right": "0px",
            })
        }, 300);
    } else {
        $(this).children("div:first").css({ /* button animation */
            "margin-left": "15px"
        })
        setTimeout(() => {
            $(this).children("div:first").css({
                "margin-left": "0px",
            })
        }, 300); 
    }
    $(this).css({
        "border-radius": "0px",
    })
    setTimeout(() => {
        $(this).css({
            "border-radius": "10px",
        })
    }, 300);
})

/* OLD fetch */
/* self.addEventListener('fetch', function(event) {
      //console.log(event.request.url);
      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Cache hit - return response
            if (response) {
              return response;
            }
            return fetch(event.request)
          }
        )
      ) 
      
    }) */

    /* OLD install */
    /* self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
    }); */

    /* OLD SW */
    /* self.addEventListener('install', function(event) {
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
       }); */

       //OLD Initialize service worker @sw.js
/* if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  } */