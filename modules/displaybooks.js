class AllBook {
  constructor() {
    this.books = [];
    this.listBox = document.getElementById('list');
    this.displayBooks();
  }

  getId = () => Math.max(...this.books.map((book) => book.id), 0) + 1

  displayBooks = () => {
    const book = localStorage.getItem('book');
    this.books = book ? JSON.parse(book) : [];
    this.listBox.innerHTML = '';
    this.books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';
      bookDiv.innerHTML = `<p>${book.title} by ${book.author}</p>
                             <button type="button" class="remove">Remove</button>`;
      bookDiv.querySelector('.remove').addEventListener('click', () => {
        this.removeBook(book.id);
      });
      this.listBox.appendChild(bookDiv);
    });
  }

  addBook = (title, author) => {
    const id = this.getId();
    this.books.push({ id, title, author });
    localStorage.setItem('book', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('book', JSON.stringify(this.books));
    this.displayBooks();
  }
}

export default AllBook;
