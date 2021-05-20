function registerServiceWorker() {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  }
}

self.addEventListener('install', e => {
 e.waitUntil(
   caches.open('my-pwa-cache').then(cache => {
     return cache.addAll([
       '/',
       '/index1.php',
       '/styles/main.css',
     ]);
   })
 );
});