import {
  addName,
  removeName
} from './local-storage.js';
import { renderNames } from './dom-utils.js';

export const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  // grab the form data
  // const formData = new FormData(form);
  // const formObj = Object.fromEntries(formData);

  const newName = form.name.value

  // do something with that data
  addName(newName); // update localStorage
  renderNames();  // re-render the whole list

  // reset the form
  form.reset();
}

// delegation
export const handleRemoveName = (e) => {
  if (e.target.matches('li')) {
    const nameToRemove = e.target.innerText;
    removeName(nameToRemove); // update localStorage
    renderNames(); // re render the whole list
  }
}