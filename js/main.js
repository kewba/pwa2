// make sure service workers are supported

if('serviceWorker' in navigator){
  window.addEventListener('load', () =>{
    navigator.serviceWorker
     .register('sw_pages.js')
     .then(reg => console.log('Service Worker: Registered'))
     .catch(err => console.log(`SW Error: ${err}`));
  })
}
