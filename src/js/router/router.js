import home from '../pages/home.js';
import toDoPage from '../pages/toDoPage.js';
import pageNotFound from '../pages/pageNotFound.js';

const routes =
        {
            "/":home(),
            "/todo":toDoPage(),
            "/404":pageNotFound()
        }
const Router = (pathname) =>
{        
    const app = document.querySelector('#app');
    app.innerHTML = '';
    
    //app.appendChild(routes[path])
    fetch(window.location.pathname)
    .then(res)
    .catch(err)

    // if valid page
    function res()
    {  
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        app.appendChild(routes[window.location.pathname])
    }

    //if invalid page
    function err()
    {
        window.location.replace("/404")
    }
}

export default Router
export {routes}