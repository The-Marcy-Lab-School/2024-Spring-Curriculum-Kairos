// // This function makes a promise and returns it.
// const asyncAction = () => {
//   // creating a new promise
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("This promise was successful!"); // resolve after 500ms
//     }, 500);
//   });

//   return promise;
// }

// "consume" the promise
// const myFirstPromise = asyncAction();

// console.log("this is the result of myFirstPromise: ", myFirstPromise)

// schedule a callback to execute when the promise resolves
// myFirstPromise.then((successMessage) => {
//   console.log(`Fulfilled! ${successMessage}`);
// });

// console.log("when does this happen?");

//Example with rejection: 


// const asyncAction = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve(random); // this value will be passed to the .then() callback
//     } else {
//       reject(new Error(random)); // this value will be passed to the .catch() callback
//     }
//   }, 500);
// }); 

// let myFirstPromise = asyncAction();

// myFirstPromise
//   .then((data) => { // executes if `resolve()` was invoked
//     console.log(`Fulfilled! ${data}`)
//   })
//   .catch((errorMessage) => { // executes if `reject()` was invoked
//     console.error(`Rejected :( ${errorMessage}`)
//   })

//Example with chaining Promises: 

// Promise.resolve("a") is shorthand for: new Promise((resolve) => resolve("a"))
Promise.resolve("a") // The first promise resolves with "a"
  .then((str) => { 
    console.log(str) // print "a"
    return "b";      // This `.then()` resolves a new promise with "b"
  })
  .then((str) => { 
    console.log(str) // print "b"
    return "c";      // This `.then()` resolves a new promise with "c"
  })
  .then((str) => {
    console.log(str) // print "c"
    // This `.then()` just resolves a new promise with undefined
  })
  .then(console.log) // print "undefined"