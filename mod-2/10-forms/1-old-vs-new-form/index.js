// Option 1: Grab each input value individually
const handleSubmitIndividually = (event) => {
  // Stop the page from trying to send the form to a server
  event.preventDefault();

  // The form element is the target of the "submit" event
  const form = event.target;

  // For super simple forms, you can grab each value using the input "name"s in the form:
  const mood = form.currentMood.value;
  const color = form.color.value;
  const isHungry = form.isHungry.checked;
  const fruit = form.favoriteFruit.value;

  const resultsP = document.querySelector("#results");
  resultsP.textContent = `I am feeling ${mood}. ${isHungry ? `I want to eat ${fruit}s` : `If I were hungry, I would eat ${fruit}s`}.`
  resultsP.style.background = color;
  resultsP.style.color = (color === 'yellow') ? 'black' : 'white';
  // reset the form
  form.reset();
}
// document.querySelector('#new-way').addEventListener('submit', handleSubmitIndividually);




// Option 2: Use the FormData constructor. Uncomment the addEventListener line below to see how it works!
const handleSubmitWithFormData = (event) => {
  event.preventDefault();
  const form = event.target;

  // the FormData API makes it SUPER easy to get an object with all form data with 1 line of code:
  debugger;
  const formValues = Object.fromEntries(new FormData(form));
  console.log(formValues)

  // Strangely, isHungry will be `undefined` if unchecked but the string `"on"` if checked (console.log formValues to see this!)
  // It will be better to convert its value to a boolean: `undefined` => `false`, "on" => `true`
  formValues.isHungry = Boolean(formValues.isHungry);

  const resultsP = document.querySelector("#results");
  resultsP.textContent = `I am feeling ${formValues.currentMood}. ${formValues.isHungry ? "I want to eat" : "If I were hungry, I would eat"} ${formValues.favoriteFruit}s.`
  resultsP.style.background = formValues.color;

  form.reset();
}

// Uncomment this to see how the handler above works!
document.querySelector('#new-way').addEventListener('submit', handleSubmitWithFormData);







// REACTING TO EVERY INPUT CHANGE -------------------------------------------
// Input elements have a `.value` property holding the current value
const handleInput = (e) => {
  console.log('new value:', e.target.value);
};
// We can grab inputs whenever they change, not just submissions
const moodTextInput = document.querySelector('#current-mood');
moodTextInput.addEventListener('input', handleInput);

// If using a fieldset, attach it there, not the inputs
const fieldset = document.querySelector('fieldset');
fieldset.addEventListener('input', handleInput);





// NON-SUBMITTING BUTTONS ----------------------------------------
// here's an example of an event fired by a button that does not trigger a submission
const capitalizeMood = (e) => {
  console.log('e.target:', e.target);
  const form = document.querySelector('#new-way');
  // can also use query selector, but if we used checkboxes 
  // or radio elements, using the form is easier
  form.currentMood.value = form.currentMood.value.toUpperCase();
};

const normalButton = document.querySelector('#normal-button');
normalButton.addEventListener('click', capitalizeMood);
