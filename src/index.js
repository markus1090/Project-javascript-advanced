import './main.css';
const image = require('./images/pollutionDesktop.jpg'); 
const image2 = require('./images/pollutionTablet.jpg');
const image3 = require('./images/pollutionSmart.jpg');

const title = document.createElement('div'); 
title.classList.add('title');

let content = document.createElement('div');
content.setAttribute("id", "content");

let par = document.createElement("DIV");
par.setAttribute("id", "show");
      
title.innerHTML = "Measurements of Air Quality";
document.body.appendChild(title); 
document.body.appendChild(content);

document.body.appendChild(par);
document.body.appendChild(legend);