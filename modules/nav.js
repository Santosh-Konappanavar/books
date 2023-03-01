const bookList = document.getElementById('bookList');
const bookAddForm = document.getElementById('addBook');
const contactInfo = document.getElementById('contact');
const totalBooksColor = document.getElementById('totalbookscolor');
const booksAddColor = document.getElementById('booksaddcolor');
const contactColor = document.getElementById('contactcolor');

export const showBookList = () => {
  bookList.style.display = 'block';
  totalBooksColor.style.color = 'blue';
  booksAddColor.style.color = 'black';
  contactColor.style.color = 'black';
  bookAddForm.style.display = 'none';
  contactInfo.style.display = 'none';
};

export const showAddBookForm = () => {
  bookAddForm.style.display = 'block';
  bookList.style.display = 'none';
  contactInfo.style.display = 'none';
  totalBooksColor.style.color = 'black';
  booksAddColor.style.color = 'blue';
  contactColor.style.color = 'black';
};

export const showContactInfo = () => {
  contactInfo.style.display = 'block';
  bookList.style.display = 'none';
  bookAddForm.style.display = 'none';
  totalBooksColor.style.color = 'black';
  booksAddColor.style.color = 'black';
  contactColor.style.color = 'blue';
};
