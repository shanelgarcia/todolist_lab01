import home from '../pages/home.js';
import toDoPage from '../pages/toDoPage.js';
import pageNotFound from '../pages/pageNotFound.js';

const routes =
{
    "/":home(),
    "/todopage":toDoPage()
    //"pagenotfound":pageNotFound()
}

const Router = (path) =>
{
    const app = document.querySelector('#app');
    app.innerHTML = '';
    app.appendChild(routes['/'])
}

export default Router