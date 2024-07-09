import './style.css'
import { renderMain, renderBooks, renderAuthor, updateDropDown } from './utils/render-functions.js';
import { Author } from './models/has-many.js';

const handleAuthorSubmit = (e) => {
  e.preventDefault();
  const { name } = Object.fromEntries(new FormData(e.target));
  const author = new Author(name);

  renderAuthor(author);
  updateDropDown();

  e.target.reset();
}

const handleBookSubmit = (e) => {
  e.preventDefault();
  const { id, title } = Object.fromEntries(new FormData(e.target));

  const author = Author.findBy(Number(id));
  author.addBook(title);

  renderBooks(document.querySelector(`#author-ul-${id}`), author);

  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('author-form').addEventListener('submit', handleAuthorSubmit);
  document.getElementById('book-form').addEventListener('submit', handleBookSubmit);
}

main();