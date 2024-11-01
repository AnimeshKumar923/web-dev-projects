const myLibrary = [];

function Book(title, author, pages, year) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

function addBook() {
  let book = new Book('Philo', 'Kafka', 278, 2000);
  myLibrary.push(book);
}

const displayBtn = document.querySelector('.display-btn');

displayBtn.addEventListener('click', displayBook)

function displayBook(){
  createCard()
}
myLibrary.forEach(item => {
  
});


// for(let i = 0; i < 12; i++){
// }

// test function for display
// createCard();
console.log(myLibrary);
addBook();
console.log(myLibrary);

function createCard(){
  // create card
  const display = document.querySelector('.display');
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  display.appendChild(cardDiv);
  
  // create title
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.textContent = `Dynamic title`;
  cardDiv.appendChild(titleDiv);
  
  // create info
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  infoDiv.textContent = `info`
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
}