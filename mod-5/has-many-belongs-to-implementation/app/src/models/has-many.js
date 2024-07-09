import getId from "../utils/getId.js";
import Book from "./belongs-to.js"

// build the class that would have many things
export class Author {
  static #allAuthors = [];
  #books = [];

  constructor(name) {
    this.id = getId();
    this.name = name; // Array to store books
    Author.#allAuthors.push(this);
  };

  addBook(title) {
    this.#books.push(new Book(title, this.name));
  };

  getBooks() {
    return [...this.#books];
  };

  static getAllAuthors() {
    return [...Author.#allAuthors];
  }

  static findBy(id) {
    return Author.#allAuthors.find((author) => author.id === id);
  }
}
