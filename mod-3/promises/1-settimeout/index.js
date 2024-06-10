/**
 * console.log('starting!');

setTimeout(() => { // wait 3 seconds then...
  console.log(1)
}, 0)

setTimeout(() => { // wait 1 seconds then...
  console.log(2)
}, 0)

setTimeout(() => { // wait 2 seconds then...
  console.log(3)
}, 0)

console.log('done!');

// starting 
// done!
// 2
// 3
// 1

*/

console.log('starting!');
setTimeout(() => { // wait 3 seconds then...
  console.log(1)
  setTimeout(() => { // wait 1 seconds then...
    console.log(2)
    setTimeout(() => { // wait 2 second then...
      console.log(3)
      console.log('done!');
    }, 2000)
  }, 1000)
}, 3000)