import {
  getNames,
  initializeNames,
} from './local-storage.js';

import { renderNames } from './dom-utils.js';
import { handleRemoveName, handleSubmit } from './event-handler-utils.js';

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
