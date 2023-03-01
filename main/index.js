import AllBook from '../modules/displaybooks.js';
import { showBookList, showAddBookForm, showContactInfo } from '../modules/nav.js';
import now from '../modules/luxontime.js';

const addBtn = document.getElementById('add_new_book');

const bookLibrary = new AllBook();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookName').value;
  const author = document.getElementById('author').value;
  bookLibrary.addBook(title, author);
});

bookLibrary.displayBooks();

const totalBooksBtn = document.getElementById('totalbooks');
const booksAddBtn = document.getElementById('booksadd');
const contactInfoBtn = document.getElementById('contactinfo');

totalBooksBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showBookList();
});

booksAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAddBookForm();
});

contactInfoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showContactInfo();
});

const timeDiv = document.getElementById('date');
timeDiv.innerText = now;