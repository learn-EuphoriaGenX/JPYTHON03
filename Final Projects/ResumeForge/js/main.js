import { navbar } from '../components/navbar.js';
import { template } from '../components/template-card.js';
import data from '../data/templates.js'
import{footer} from '../components/footer.js';

let nav = document.getElementById('render-nav')
nav.innerHTML = navbar()


let foot = document.getElementById('render-foot')
 foot.innerHTML = footer()

let renderArea = document.getElementById('render-templates')
renderArea.innerHTML = data.map(data => template(data.thumbnail, data.name, data.description)).join('')




