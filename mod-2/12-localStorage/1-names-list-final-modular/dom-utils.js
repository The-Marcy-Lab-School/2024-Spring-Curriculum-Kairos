import {
  getNames,
} from './local-storage.js';

// render whatever names are in localStorage
export const renderNames = () => {
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