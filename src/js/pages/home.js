//imports
import {title,titleClass,tag,tagClass} from "../components/header/brand.js"
import {logo} from "../icons/logo.js"
import header from "./components/header/header.js";
import tagline from "./components/header/tagline.js";
import makeElement from "../utils/makeElement.js";

// app
const home = function(params){
    const header = document.createElement('header')
    header.classList.add('page-header')
    header.appendChild(makeElement(logo()))
    header.appendChild(makeElement(header(title,titleClass)))
    header.appendChild(makeElement(tagline(tag,tagClass)))

    return header
}

export default home