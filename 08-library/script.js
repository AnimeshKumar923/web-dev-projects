// library object


const myLibrary = [];
// console.log(myLibrary.length)
/**
 * Constructor method to initialize each book object created in the code 
 * @param {string} title Book's title
 * @param {string} author Author's name
 * @param {number} pages Total number of pages in book
 * @param {number} year Publication year
 */
function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.isDisplayed = false;
}


function addBook() {
  let book = new Book('ONE', 'Kafka', 278, 2000, false);
  let b1 = new Book('TWO', 'Rumi', 874, 300, false);
  let b2 = new Book('THREE', 'Marcus', 547, 2001, false);
  let b3 = new Book('FOUR', 'Confucius', 879, 2020, false);
  myLibrary.push(book);
  myLibrary.push(b1);
  myLibrary.push(b2);
  myLibrary.push(b3);
}
addBook();


// display button handler
const displayBtn = document.querySelector('.display-btn');
displayBtn.addEventListener('click', displayBook)
function displayBook(){
  clearDisplay();
  myLibrary.forEach((item, index) => {
    if(!item.isDisplayed){
      createDisplayCard(item, index);
    }
  });
}


// modal button & form handler
const newBookBtn = document.querySelector('.new-book');
const dialog = document.querySelector('.dialog');
newBookBtn.addEventListener('click', () => {
  dialog.showModal();
})

const closeModalBtn = document.querySelector('.close-modal');
closeModalBtn.addEventListener('click', (e) => {
  dialog.close();
  document.querySelector('.submit-form').reset();
  e.preventDefault(); // to prevent sending data unintentionally, comment out and check console for the problem occurring.
})

// add book button handler
const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // extract form values
  let bookTitle = document.querySelector('#title').value;
  let bookAuthor = document.querySelector('#author').value;
  let bookPages = document.querySelector('#pages').value;
  let bookYear = document.querySelector('#year').value;

  if (bookTitle === '' || bookPages === '' || bookAuthor === '' || bookYear === '') {
    alert('one of the field is empty, verify the fields again');
  } else {
    let book = new Book(bookTitle, bookAuthor, bookPages, bookYear);
    myLibrary.push(book);
    alert('book added!');
    document.querySelector('.submit-form').reset();
    dialog.close();
  }
  displayBook();
})


/**
 * Creates a display card with elements for each of the book present in the 'myLibrary' Object array
 * @param {object} item
 */

function createDisplayCard(item, index){
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

  // display flag
  item.isDisplayed = true;

  // remove book button
  const removeBookBtn = document.createElement('button');
  removeBookBtn.classList.add('remove-btn');
  removeBookBtn.textContent = 'Remove Book';
  cardDiv.appendChild(removeBookBtn);

  removeBookBtn.setAttribute('book-index', index);
  removeBookBtn.addEventListener('click', () => {
    let index = removeBookBtn.getAttribute('book-index');
    myLibrary.splice(index, 1);
    alert('book removed!');
    clearDisplay();
  });
}

function clearDisplay(){
  const display = document.querySelector('.display');
  display.innerHTML = '';
}