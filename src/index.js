import './style.css';

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/sw.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }

function component(){
  var element = document.createElement('div');
  element.innerHTML = 'waheguru';
  element.classList.add('hello');
  return element;
}
console.log('waheguru');
console.log('satname');
document.body.appendChild(component());
