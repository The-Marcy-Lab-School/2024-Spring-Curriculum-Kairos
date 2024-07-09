import { Author } from "../models/has-many.js";

export const renderMain = () => {
  const app = document.querySelector('#app');
  const authorFormSection = document.createElement('section');
  const bookFormSection = document.createElement('section');
  const authorListSection = document.createElement('section');
  app.append(authorFormSection, bookFormSection, authorListSection);

  authorFormSection.innerHTML = `
    <form id="author-form">
    <h2>Add Author</h2>
      <label for="author-name">Author Name:</label>
      <input type="text" name="name" id="author-name" required>
      <button type="submit">Add Author</button>
    </form>
  `;

  bookFormSection.id = 'bookForm';
  bookFormSection.innerHTML = `
    <form id="book-form">
      <h2>Add Book</h2>
      <label for="authors-select">Select Author:</label>
      <select id="authors-select" name="id" required>
        <!-- Dynamic Author Options Here -->
      </select>
      <label for="book-title">Book Title:</label>
      <input type="text" name="title" id="book-title" required>
      <button type="submit">Add Book</button>
    </form>
  `;

  authorListSection.innerHTML = `
    <ul id='authors-list'> 
      <h2>Collection</h2>
    </ul>
  `
};

export const renderAuthor = (author) => {
  const authorElement = document.createElement('li');
  document.querySelector('#authors-list').append(authorElement);

  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  authorElement.append(h3, ul);

  authorElement.id = `author-num-${author.id}`;
  h3.textContent = author.name;
  ul.id = `author-ul-${author.id}`;

  renderBooks(ul, author)
  updateDropDown();
};


export const renderBooks = (booksUl, author) => {
  const books = author.getBooks();
  if (books.length === 0) {
    booksUl.innerHTML = 'No books have been added for this author.';
    return;
  }

  booksUl.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = book.title;
    booksUl.append(li);
  });
};

export const updateDropDown = () => {
  let authorSelect = document.querySelector('#authors-select')

  authorSelect.innerHTML = '';

  Author.getAllAuthors().forEach(author => {
    const option = document.createElement('option');
    option.textContent = author.name
    option.value = author.id;
    authorSelect.append(option);
  });
}
