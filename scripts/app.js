class PWATest {
	constructor() {
    		this.init();
  	}
	async init() {
    		alert("init()");
  	}
}

window.addEventListener('load', e => {
  new PWATest();
  registerSW();
});

async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./scripts/service-worker.js'); 
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.'); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}

function msg() {  
	alert("Thanks!");  
}

//	function registerSW() {
//		if ('serviceWorker' in navigator) {
//			// register service worker 
//			navigator.serviceWorker.register('service-worker.js');
//		}
//	}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    alert("Changing img...");
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/icon-512x512.png') {
      myImage.setAttribute('src','./images/icon-192x192.png');
    } else {
      myImage.setAttribute('src','./images/icon-512x512.png');
    }
}