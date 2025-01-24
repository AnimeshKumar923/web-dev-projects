// import restaurantImg from "./restaurant.png";
import { loadHomepage } from './homepage.js'
import { loadMenu } from './menu.js'

loadHomepage();
document.querySelector('.homeBtn').addEventListener('click', () => {
  document.querySelector('#content').innerHTML = '';
  loadHomepage();
})
document.querySelector('.menuBtn').addEventListener('click', () => {
  document.querySelector('#content').innerHTML = '';
  loadMenu();
})