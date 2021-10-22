import home from '../pages/home.js';
import toDoPage from '../pages/toDoPage.js';
import pageNotFound from '../pages/pageNotFound.js';

const routes =
        {
            "/":home,
            "/todo":toDoPage,
            "/404":pageNotFound
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
    app.appendChild(routes[window.location.pathname])
    


}

export default Router
export {routes}