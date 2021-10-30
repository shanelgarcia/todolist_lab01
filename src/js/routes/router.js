import home from '../pages/home.js';
import toDoPage from '../pages/toDoPage.js';
import pageNotFound from '../pages/pageNotFound.js';

const routes =
        {
            "/":home,
            "/todo":toDoPage
        }
const Router = (pathname) =>
{
    const isValidRoute = Object.keys(routes).find(key => key===pathname)        
    const app = document.querySelector('#app');
    app.innerHTML = '';
    
    //app.appendChild(routes[path])

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    //app.appendChild(routes[window.location.pathname])
    if(isValidRoute === undefined)
    {
        app.appendChild(pageNotFound())
    }
    else
    {
        app.appendChild(routes[isValidRoute]())
    }


}

export default Router
export {routes}