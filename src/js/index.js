import Router from './router/router.js';
import { routes } from './router/router.js';

const app = document.querySelector('#app');

Router(window.location.pathname)
app.appendChild(routes[window.location.pathname])