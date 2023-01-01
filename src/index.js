import {navigation, home_page, build_tabs} from './page.js';
import './style.css';

document.body.appendChild(navigation());

document.body.appendChild(home_page());

build_tabs();