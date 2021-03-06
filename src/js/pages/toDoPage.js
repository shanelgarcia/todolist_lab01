//imports
import {title,titleClass,tag,tagClass} from "../components/header/brand.js"
import header from "../components/header/header.js";
import tagline from "../components/header/tagline.js";

import makeElement from "../utils/makeElement.js";

const toDoPage = function(){
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(header(title,titleClass)))
    pageHeader.appendChild(makeElement(tagline(tag,tagClass)))

    return pageHeader;
}

export default toDoPage