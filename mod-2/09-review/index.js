console.log("hello");
/**
 * ## Intro to DOM 

- .innerHTML -> When to use it etc
- how to customize text?! Like span etc., 
- Question 8 from the DOM Assignment.
- everything what even is DOM?!
- Terminology 
- How do you choose the what methods to use etc, when to use append v innerText/textContent?


## DOM Events

- Events -> The process? Syntax? WHat is events?
- delegation ?! 
- WHat info is useful to know from the event object that is passed by the eventListener!?
 */

const hobbies = ["reading", "sleeping", "writing", "gardening"]; 
// document.body.innerHTML = `
//   <ul>
//     <li> <span>crocheting</span> </li>
//     <li> biking </li>
//     <li> writing </li>
//   </ul>
// `
let heading = document.createElement("h1"); 
heading.innerText = "hobbies"; 
document.body.appendChild(heading);

const createHobbiesList = (arr) => {
  let unorderedHobbies = document.createElement("ul");
  arr.forEach(el => {
    let hobby = document.createElement("li")
    hobby.textContent = el
    unorderedHobbies.append(hobby);
  })
  console.log(unorderedHobbies);
  document.body.append(unorderedHobbies)
}

createHobbiesList(hobbies);

//Process: 
/**
 * Access an element 
 * Attach an eventListener -> a higher order method, takes in a string(event), a callback function!
 * When ____ event is triggered ____ will happen 
 * 
 * Write some logic to capture the event 
 * 
 * DOM Manipulation 
 */

let keyDownEl = document.getElementById("keydown-event"); 

const handlerFunction = (e) => {
  console.log(e);
  let keyPressed = document.createElement("p"); 
  keyPressed.textContent = e.key;
  keyDownEl.append(keyPressed);
}

document.body.addEventListener('keydown', handlerFunction);