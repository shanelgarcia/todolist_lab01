import home from './pages/home.js'

const app = document.querySelector('#app');
app.insertAdjacentElement("afterend", home())

/*
app.insertAdjacentHTML("beforeend", header(title,titleClass))
app.insertAdjacentHTML("afterend", tagline(tag,tagClass))
*/
