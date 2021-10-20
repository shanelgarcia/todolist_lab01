import home from '../pages/home.js';
import toDoPage from '../pages/toDoPage.js';
import pageNotFound from '../pages/pageNotFound.js';

const routes =
        {
            "/":home(),
            "/todopage":toDoPage()
            //"pagenotfound":pageNotFound()
        }
const Router = (pathname) =>
{
    
    const app = document.querySelector('#app');
    app.innerHTML = '';
    
    //app.appendChild(routes[path])
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
}

export default Router
export {routes}