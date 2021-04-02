// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/pwa-examples/dist/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
