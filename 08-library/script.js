// library object

const myLibrary = [];

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

function addBook() {
  let book = new Book('Philo', 'Kafka', 278, 2000);
  let b1 = new Book('SAINT RUMI', 'Rumi', 874, 300);
  myLibrary.push(book);
  myLibrary.push(b1);
}


// diplay button
const displayBtn = document.querySelector('.display-btn');
displayBtn.addEventListener('click', displayBook)
function displayBook(){
  myLibrary.forEach(item => {
    createDisplayCard(item);
  });
}

// extract form values

let bookTitle = document.querySelector('#title').value;
let bookAuthor = document.querySelector('#author').value;
let bookPages = document.querySelector('#pages').value;
let bookYear = document.querySelector('#year').value;

// console.log(`book title = ${bookTitle}`);
const addBookBtn = document.querySelector('.add-book');

addBookBtn.addEventListener('click', function(){
  
})

console.log(myLibrary);
addBook();
console.log(myLibrary);

function createDisplayCard(item){
  // create card
  const display = document.querySelector('.display');
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  display.appendChild(cardDiv);
  
  // create title
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.textContent = `${item.title}`;
  cardDiv.appendChild(titleDiv);
  
  // create info
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  infoDiv.textContent = `Information`
  cardDiv.appendChild(infoDiv);
  
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('meta');
  authorDiv.textContent = `${item.author}`;
  infoDiv.appendChild(authorDiv);
  
  const pagesDiv = document.createElement('div');
  pagesDiv.classList.add('meta');
  pagesDiv.textContent = `${item.pages}`;
  infoDiv.appendChild(pagesDiv);
  
  const yearDiv = document.createElement('div');
  yearDiv.classList.add('meta');
  yearDiv.textContent = `${item.year}`
  infoDiv.appendChild(yearDiv);
}