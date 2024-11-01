const myLibrary = [];

function Book() {
  // the constructor...
}

function addBook() {
  // do stuff here
}



const display = document.querySelector('.display');
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
// cardDiv.textContent = 'first card';
display.appendChild(cardDiv);


// const card = document.querySelector('.card');
const titleDiv = document.createElement('div');
titleDiv.classList.add('title');
titleDiv.textContent = `Dynamic title`;
cardDiv.appendChild(titleDiv);

const infoDiv = document.createElement('div');
infoDiv.classList.add('info');
// infoDiv.textContent = `hi`
cardDiv.appendChild(infoDiv);

const authorDiv = document.createElement('div');
authorDiv.classList.add('meta');
authorDiv.textContent = `a`;
infoDiv.appendChild(authorDiv);

const pagesDiv = document.createElement('div');
pagesDiv.classList.add('meta');
pagesDiv.textContent = `b`;
infoDiv.appendChild(pagesDiv);

const yearDiv = document.createElement('div');
yearDiv.classList.add('meta');
yearDiv.textContent = `c`
infoDiv.appendChild(yearDiv);