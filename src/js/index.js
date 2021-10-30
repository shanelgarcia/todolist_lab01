import Router from './routes/router.js';
import { routes } from './routes/router.js';
import { createStore, getStore } from './redux/store.js';

const app = document.querySelector('#app');

Router(window.location.pathname)

const onAppInit = async function(e){
    
}

window.addEventListener('load', onAppInit)