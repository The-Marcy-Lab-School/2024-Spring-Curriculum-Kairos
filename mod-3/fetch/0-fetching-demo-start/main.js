import { fetchNewDog } from './js/event-handlers.js';

const main = () => {
  document
    .querySelector('#new-dog-image-button')
    .addEventListener('click', fetchNewDog);
}

main();