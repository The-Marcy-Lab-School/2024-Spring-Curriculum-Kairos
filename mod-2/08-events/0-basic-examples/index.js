// a generic event handler
const eventHandler = (e) => console.log(e);

// register an event listener on a button
const button = document.querySelector('button')
const mouseArea = document.querySelector('#mouse-area');

// TODO:
// add a 'click' handler for the button
// addEventListener is a higher order method and it takes in a eventName and a callback Function.

const buttonEventHandler = (e) => {
  console.log("The button was clicked");
}

// when a button is clicked, this event is triggered
button.addEventListener("click", buttonEventHandler)
// add a 'mousemove' handler for the mouseArea
// this is a reusuable callback function that handles when a mouseover occurs
const mouseEventHandler = (e) => {
  console.log("hello");
  console.log(e)
}
// attached an eventListener by using "addEventListener"
// dictated what event we were waiting for 
// added a callback function that gets triggered when a event happens
mouseArea.addEventListener("mouseover", mouseEventHandler)

// add a 'keydown' handler for the entire document

const displayKey = (e) => {
  console.log(e)
  let p = document.createElement("p");
  p.innerText = e.key
  document.body.append(p);
}
document.addEventListener('keydown', displayKey)