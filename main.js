/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _information_button_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-button.png */ \"./src/information-button.png\");\n\n\nconst loadAbout = () => {\n  const aboutDiv = document.createElement('div');\n  aboutDiv.className = 'menu';\n  aboutDiv.innerHTML = `\n    <h2>About Us</h2>\n    <p>Welcome to <strong>Wonderful Restaurant</strong>, where passion meets flavor! Established in 2005, we pride ourselves on serving the finest dishes made from locally sourced ingredients. Our chefs bring years of experience and creativity to every plate, ensuring a memorable dining experience for our guests.</p>\n    <p>Whether you're here for a casual meal or a special celebration, we strive to make every visit exceptional. Come join us and taste the difference!</p>\n`;\n  document.querySelector('#content').appendChild(aboutDiv);\n\n  // info logo\n    const imgDiv = document.createElement('div');\n    aboutDiv.appendChild(imgDiv);\n    const image = document.createElement(\"img\");\n    image.src = _information_button_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.style = `height: 50px; width: 50px;`;\n    imgDiv.appendChild(image);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRXhDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUTtBQUN4QixpQ0FBaUMsWUFBWTtBQUM3QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluZm9JY29uIGZyb20gJy4vaW5mb3JtYXRpb24tYnV0dG9uLnBuZydcblxuZXhwb3J0IGNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXREaXYuY2xhc3NOYW1lID0gJ21lbnUnO1xuICBhYm91dERpdi5pbm5lckhUTUwgPSBgXG4gICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICA8cD5XZWxjb21lIHRvIDxzdHJvbmc+V29uZGVyZnVsIFJlc3RhdXJhbnQ8L3N0cm9uZz4sIHdoZXJlIHBhc3Npb24gbWVldHMgZmxhdm9yISBFc3RhYmxpc2hlZCBpbiAyMDA1LCB3ZSBwcmlkZSBvdXJzZWx2ZXMgb24gc2VydmluZyB0aGUgZmluZXN0IGRpc2hlcyBtYWRlIGZyb20gbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLiBPdXIgY2hlZnMgYnJpbmcgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgY3JlYXRpdml0eSB0byBldmVyeSBwbGF0ZSwgZW5zdXJpbmcgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UgZm9yIG91ciBndWVzdHMuPC9wPlxuICAgIDxwPldoZXRoZXIgeW91J3JlIGhlcmUgZm9yIGEgY2FzdWFsIG1lYWwgb3IgYSBzcGVjaWFsIGNlbGVicmF0aW9uLCB3ZSBzdHJpdmUgdG8gbWFrZSBldmVyeSB2aXNpdCBleGNlcHRpb25hbC4gQ29tZSBqb2luIHVzIGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSE8L3A+XG5gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICAvLyBpbmZvIGxvZ29cbiAgICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBpbmZvSWNvbjtcbiAgICBpbWFnZS5zdHlsZSA9IGBoZWlnaHQ6IDUwcHg7IHdpZHRoOiA1MHB4O2A7XG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomepage: () => (/* binding */ loadHomepage)\n/* harmony export */ });\n/* harmony import */ var _restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.png */ \"./src/restaurant.png\");\n\n   \nconst loadHomepage = () => {\n  const contentDiv = document.querySelector('#content');\n  const container = document.createElement('div');\n  container.className = 'container';\n  contentDiv.appendChild(container);\n  \n  const pageHeading = document.createElement('h2')\n  pageHeading.textContent = 'Wonderful Restaurant'\n  container.appendChild(pageHeading);\n\n  const imgDiv = document.createElement('div');\n  container.appendChild(imgDiv);\n  const image = document.createElement(\"img\");\n  image.src = _restaurant_png__WEBPACK_IMPORTED_MODULE_0__;\n  image.style = `height: 50px; width: 50px;`;\n  imgDiv.appendChild(image);\n\n  // Add intro section\n  const intro = document.createElement('div');\n  intro.className = 'intro';\n  intro.innerHTML = `\n    <h2>Proud Intro</h2>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.</p>\n  `;\n  container.appendChild(intro);\n\n  // Add timings section\n  const timings = document.createElement('div');\n  timings.className = 'timings';\n  timings.innerHTML = `\n    <h3>Hours</h3>\n    <p>Monday: 6am - 6pm</p>\n    <p>Tuesday: 6am - 6pm</p>\n    <p>Wednesday: 6am - 6pm</p>\n    <p>Thursday: 6am - 10pm</p>\n    <p>Friday: 6am - 10pm</p>\n    <p>Saturday: 8am - 10pm</p>\n    <p>Sunday: CLOSED</p>\n  `;\n  container.appendChild(timings);\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0Q0FBYTtBQUMzQiwrQkFBK0IsWUFBWTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZXBhZ2UuanM/MTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzdGF1cmFudEltZyBmcm9tIFwiLi9yZXN0YXVyYW50LnBuZ1wiO1xuICAgXG5leHBvcnQgY29uc3QgbG9hZEhvbWVwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBcbiAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gJ1dvbmRlcmZ1bCBSZXN0YXVyYW50J1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xuXG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSByZXN0YXVyYW50SW1nO1xuICBpbWFnZS5zdHlsZSA9IGBoZWlnaHQ6IDUwcHg7IHdpZHRoOiA1MHB4O2A7XG4gIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgLy8gQWRkIGludHJvIHNlY3Rpb25cbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW50cm8uY2xhc3NOYW1lID0gJ2ludHJvJztcbiAgaW50cm8uaW5uZXJIVE1MID0gYFxuICAgIDxoMj5Qcm91ZCBJbnRybzwvaDI+XG4gICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXplZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLjwvcD5cbiAgYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvKTtcblxuICAvLyBBZGQgdGltaW5ncyBzZWN0aW9uXG4gIGNvbnN0IHRpbWluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGltaW5ncy5jbGFzc05hbWUgPSAndGltaW5ncyc7XG4gIHRpbWluZ3MuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5Ib3VyczwvaDM+XG4gICAgPHA+TW9uZGF5OiA2YW0gLSA2cG08L3A+XG4gICAgPHA+VHVlc2RheTogNmFtIC0gNnBtPC9wPlxuICAgIDxwPldlZG5lc2RheTogNmFtIC0gNnBtPC9wPlxuICAgIDxwPlRodXJzZGF5OiA2YW0gLSAxMHBtPC9wPlxuICAgIDxwPkZyaWRheTogNmFtIC0gMTBwbTwvcD5cbiAgICA8cD5TYXR1cmRheTogOGFtIC0gMTBwbTwvcD5cbiAgICA8cD5TdW5kYXk6IENMT1NFRDwvcD5cbiAgYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWluZ3MpO1xuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/homepage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n// import restaurantImg from \"./restaurant.png\";\n\n\n\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n\ndocument.querySelector('.homeBtn').addEventListener('click', () => {\n  document.querySelector('#content').innerHTML = '';\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n})\n\ndocument.querySelector('.menuBtn').addEventListener('click', () => {\n  document.querySelector('#content').innerHTML = '';\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n})\n\ndocument.querySelector('.aboutBtn').addEventListener('click', () => {\n  document.querySelector('#content').innerHTML = '';\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQzZDO0FBQ1I7QUFDRTs7QUFFdkMsMERBQVk7O0FBRVo7QUFDQTtBQUNBLEVBQUUsMERBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgcmVzdGF1cmFudEltZyBmcm9tIFwiLi9yZXN0YXVyYW50LnBuZ1wiO1xuaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSAnLi9ob21lcGFnZS5qcyc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tICcuL2Fib3V0LmpzJztcblxubG9hZEhvbWVwYWdlKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gIGxvYWRIb21lcGFnZSgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgbG9hZE1lbnUoKTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICBsb2FkQWJvdXQoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-logo.jpg */ \"./src/menu-logo.jpg\");\n\n\nconst loadMenu = () => {\n  const menuDiv = document.createElement('div');\n  menuDiv.className = 'menu';\n  menuDiv.innerHTML = `\n  <h2>Our Menu</h2>\n  <p>Explore our delicious offerings, crafted with love and fresh ingredients:</p>\n  <ul>\n    <li><strong>Appetizers:</strong> Bruschetta, Caesar Salad, Garlic Bread</li>\n    <li><strong>Main Course:</strong> Grilled Salmon, Spaghetti Carbonara, Chicken Alfredo</li>\n    <li><strong>Desserts:</strong> Tiramisu, Chocolate Lava Cake, Cheesecake</li>\n    <li><strong>Beverages:</strong> Fresh Lemonade, Iced Tea, House Wine</li>\n  </ul>`;\n  document.querySelector('#content').appendChild(menuDiv);\n  \n  // menu logo\n  const imgDiv = document.createElement('div');\n  menuDiv.appendChild(imgDiv);\n  const image = document.createElement(\"img\");\n  image.src = _menu_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.style = `height: 50px; width: 50px;`;\n  imgDiv.appendChild(image);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1Qzs7QUFFaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBUTtBQUN0QiwrQkFBK0IsWUFBWTtBQUMzQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudUxvZ28gZnJvbSAnLi9tZW51LWxvZ28uanBnJztcblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuY2xhc3NOYW1lID0gJ21lbnUnO1xuICBtZW51RGl2LmlubmVySFRNTCA9IGBcbiAgPGgyPk91ciBNZW51PC9oMj5cbiAgPHA+RXhwbG9yZSBvdXIgZGVsaWNpb3VzIG9mZmVyaW5ncywgY3JhZnRlZCB3aXRoIGxvdmUgYW5kIGZyZXNoIGluZ3JlZGllbnRzOjwvcD5cbiAgPHVsPlxuICAgIDxsaT48c3Ryb25nPkFwcGV0aXplcnM6PC9zdHJvbmc+IEJydXNjaGV0dGEsIENhZXNhciBTYWxhZCwgR2FybGljIEJyZWFkPC9saT5cbiAgICA8bGk+PHN0cm9uZz5NYWluIENvdXJzZTo8L3N0cm9uZz4gR3JpbGxlZCBTYWxtb24sIFNwYWdoZXR0aSBDYXJib25hcmEsIENoaWNrZW4gQWxmcmVkbzwvbGk+XG4gICAgPGxpPjxzdHJvbmc+RGVzc2VydHM6PC9zdHJvbmc+IFRpcmFtaXN1LCBDaG9jb2xhdGUgTGF2YSBDYWtlLCBDaGVlc2VjYWtlPC9saT5cbiAgICA8bGk+PHN0cm9uZz5CZXZlcmFnZXM6PC9zdHJvbmc+IEZyZXNoIExlbW9uYWRlLCBJY2VkIFRlYSwgSG91c2UgV2luZTwvbGk+XG4gIDwvdWw+YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgXG4gIC8vIG1lbnUgbG9nb1xuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IG1lbnVMb2dvO1xuICBpbWFnZS5zdHlsZSA9IGBoZWlnaHQ6IDUwcHg7IHdpZHRoOiA1MHB4O2A7XG4gIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/information-button.png":
/*!************************************!*\
  !*** ./src/information-button.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1e9cddad8bb63029954.png";

/***/ }),

/***/ "./src/menu-logo.jpg":
/*!***************************!*\
  !*** ./src/menu-logo.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fd87e3472bec3eaaa9f.jpg";

/***/ }),

/***/ "./src/restaurant.png":
/*!****************************!*\
  !*** ./src/restaurant.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2940d8279c95a5bfa7c4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;