//Function that appends dog img to DOM
import { setDogPicture } from "./dom-helpers.js"

export const fetchNewDog = () => {
  console.log('fetching a new dog');
  // 1. fetch
  // 2. check if the response is ok
  // 3. parse the response body
  // 4. use the response body to set the dog picture
  // 5. handle errors
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    // response is from the API call itself
    // response that comes from making the request
    if (!response.ok) {
      return console.log(`Failed response. ${response.status} ${response.statusText}`)
    }
    console.log(response);
    return response.json()
    // return response.json()
  }).then((data) => {
    // contain the info from the API
    console.log(data);
    setDogPicture(data.message);
  }).catch((err) => {
    console.error(new Error("This did not work"));
  })
}
fetchNewDog();

//POST

const newUser = { name: "nicole", job: "fellow" };
// const updateUser = {name: "neo", job: "leader"}
const postOption = {
  method: "POST",                      // The type of HTTP request
  body: JSON.stringify(newUser),       // The data to be sent to the API
  headers: {
    "Content-Type": "application/json" // The format of the body's data
  }  
}

// This is a good API to practice GET/POST/PATCH/DELETE requests
const url = 'https://reqres.in/api/users';

// Notice that the options object is provided as the second arg
fetch(url, postOption)
  .then((response) => {
    if (!response.ok) {
      return console.log(`Fetch failed. ${response.status} ${response.statusText}`)
    }
    return response.json();
  })
  .then((responseData) => {
      // A POST request will return the object created with an id and a createdAt timestamp
      console.log("Here is your data:", responseData);
  })
  .catch((error) => {
    console.log("Error caught!");
    console.error(error.message);
  })