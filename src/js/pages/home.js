//imports
import {title,titleClass,tag,tagClass} from "../components/header/brand.js"
import header from "../components/header/header.js";
import tagline from "../components/header/tagline.js";
import link from "../components/buttons/link.js"
import {logo} from '../icons/logo.js'

import makeElement from "../utils/makeElement.js";

//js code
const home = () => 
{
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo))
    pageHeader.appendChild(makeElement(header(title,titleClass)))
    pageHeader.appendChild(makeElement(tagline(tag,tagClass)))
    pageHeader.appendChild(makeElement(link("Checkout Tasks","link-button","../pages/toDoPage.js")))

    return pageHeader
}

export default home