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
  // empty the ul
  // get Array of names from localStorage
  // for each name in the array, make it an li and append to the ul
}

const handleSubmit = (e) => {
  // prevent default

  // grab the form data

  // update localStorage
  // re-render the whole list

  // reset the form
}

// delegation handler
const handleRemoveName = (e) => {

}

const main = () => {
  // the very first time the user loads this, add names to localStorage
  if (!getNames()) initializeNames();

  // 1. render the existing names

  // 2. attach the form event handler

}

main();
