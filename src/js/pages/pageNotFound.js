//imports
import {title,titleClass} from "../components/header/brand.js"
import header from "../components/header/header.js";

import makeElement from "../utils/makeElement.js";

const pageNotFound = () =>
{
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(header(title,titleClass)))

    return pageHeader
}

export default pageNotFound