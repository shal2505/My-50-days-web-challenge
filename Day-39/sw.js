// ==========================================
// SERVICE WORKER - DAY 39
// ==========================================

const CACHE_NAME = "platform-cache-v2";

const CORE_ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./main.js"
];

// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", (event) => {

    console.log("🛠️ Service Worker installing...");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("📦 Caching Day 39 files...");

                return cache.addAll(CORE_ASSETS);
            })
    );

    self.skipWaiting();
});

// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", (event) => {

    console.log("🚀 Service Worker activated!");

    event.waitUntil(

        caches.keys().then((cacheNames) => {

            return Promise.all(

                cacheNames.map((cacheName) => {

                    if (cacheName !== CACHE_NAME) {

                        console.log(
                            "🗑️ Deleting old cache:",
                            cacheName
                        );

                        return caches.delete(cacheName);
                    }

                })

            );

        }).then(() => self.clients.claim())

    );
});

// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
            .then((cachedResponse) => {

                if (cachedResponse) {

                    console.log(
                        "📦 Serving from cache:",
                        event.request.url
                    );

                    return cachedResponse;
                }

                return fetch(event.request);

            })

            .catch(() => {

                // If navigation fails while offline,
                // show the cached index page.

                if (event.request.mode === "navigate") {

                    return caches.match("./index.html");

                }

            })

    );

});