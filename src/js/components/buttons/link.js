import Router from "../../router/router";
import makeElement from "../../utils/makeElement"

//function
const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
    //console.log(e.currentTarget.dataset.path);

    return false;
}

const link = function(label,path,className){

    const template = `<a class="${className}" href="${path}" data-path="${path}">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)

    return element
}

export default link