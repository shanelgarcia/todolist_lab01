//imports
import {title,titleClass} from "../components/header/brand.js"
import header from "../components/header/header.js";

import makeElement from "../utils/makeElement.js";

const pageNotFound = function(){
    const page = document.createElement('header')
    let headerTemp =
    `
        <h1>404</h1>
    `
    const pageHeader = makeElement(headerTemp)
    //pageHeader.classList.add('page-header')
    //pageHeader.appendChild(makeElement(header(title,titleClass)))
    page.append(pageHeader)
    return page
}

export default pageNotFound