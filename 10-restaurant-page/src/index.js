// import restaurantImg from "./restaurant.png";
import { loadHomepage } from './homepage.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

loadHomepage();

document.querySelector('.homeBtn').addEventListener('click', () => {
  document.querySelector('#content').innerHTML = '';
  loadHomepage();
})

document.querySelector('.menuBtn').addEventListener('click', () => {
  document.querySelector('#content').innerHTML = '';
  loadMenu();
})

document.querySelector('.aboutBtn').addEventListener('click', () => {
  document.querySelector('#content').innerHTML = '';
  loadAbout();
})