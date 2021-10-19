//imports
import header from "./components/header/header.js";
import tagline from "./components/header/tagline.js";

//app components
const titleClass = "brand-title";
const title = "Takeout Box";

const taglineClass = "brand-tagline";
const tagline = "Checking out your task made easy"

//js code
const app = document.querySelector('#app');

app.insertAdjacentHTML("afterend", header(title,titleClass))
app.insertAdjacentHTML("afterend", tagline(tagline,taglineClass))

