import {
  getNames,
  setNames,
  initializeNames,
  addName,
  removeName
} from './local-storage.js';

// render whatever names are in localStorage
const renderNames = () => {
  // grab the ul
  const ul = document.querySelector("ul#names-list")

  // empty the ul
  ul.innerHTML = '';

  // get Array of names from localStorage
  const names = getNames();

  // for each name in the array, make it an li and append to the ul
  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.append(li);
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  // grab the form data
  const newName = form.name.value

  // do something with that data
  addName(newName); // update localStorage
  renderNames();  // re-render the whole list

  // reset the form
  form.reset();
}

// delegation
const handleRemoveName = (e) => {
  if (e.target.matches('li')) {
    const nameToRemove = e.target.innerText;
    removeName(nameToRemove); // update localStorage
    renderNames(); // re render the whole list
  }
}

const main = () => {
  // the very first time the user loads this, add names to localStorage
  if (!getNames()) initializeNames();

  // 1. render the existing names
  renderNames();

  // 2. attach the form event handler
  document.querySelector('form').addEventListener('submit', handleSubmit);
  document.querySelector('ul').addEventListener('click', handleRemoveName);
}

main();
