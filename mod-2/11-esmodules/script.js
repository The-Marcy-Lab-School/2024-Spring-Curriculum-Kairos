//default
import otherText from './other.js';

//named
import { newText } from "./other.js";

console.log("hello");
console.log("imported newText from Other:",newText)

console.log("imported otherText from Other:",otherText)
const h1 = document.querySelector('#heading');

const main = () => {
  // const h1 = document.querySelector('#heading');
  // console.log(h1);
  // h1.textContent = newText;
}

main()