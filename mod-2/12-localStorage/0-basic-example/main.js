const basicLocalStorage = () => {
  localStorage.setItem('luckyNumber', 13);
  localStorage.setItem('favoriteColor', 'purple');

  const storedNumber = localStorage.getItem('luckyNumber');
  const storedColor = localStorage.getItem('favoriteColor');

  console.log('storedNumber: ', storedNumber);  // 13
  console.log('storedNumber: ', storedColor);   // purple
  console.log('storedNumber type: ', typeof storedNumber);  // string
  console.log('storedNumber type: ', typeof storedColor);   // string
}
// basicLocalStorage();

const toStringVsStringify = () => {
  const num = 13
  const bool = true
  const str = 'purple'
  const arr = [1, 2, 3]
  const obj = { name: 'ben' }
  console.log(num.toString())  // '13'
  console.log(bool.toString()) // 'true'
  console.log(str.toString())  // 'purple'
  console.log(arr.toString())  // '1,2,3'
  console.log(obj.toString())  // '[object Object]'

  console.log(JSON.stringify(arr)); // [1, 2, 3]
  console.log(JSON.stringify(obj)); // { name: 'ben' }
}
// toStringVsStringify();



/* 
Problem: only string values work with localStorage
Solution: JSON.stringify() and JSON.parse()
*/
const stringifyAndParse = () => {
  const instructors = ['ben', 'gonzalo', 'motun', 'zo', 'carmen'];
  const user = {
    name: 'ben',
    canCode: true
  };

  // We typically will JSON.stringify() the value before we set it... 
  localStorage.setItem('instructors', JSON.stringify(instructors));
  localStorage.setItem('user', JSON.stringify(user));

  // ...and JSON.parse() the value when we get it:
  const storedInstructors = localStorage.getItem('instructors');
  const storedUser = localStorage.getItem('user');

  console.log('storedInstructors:', storedInstructors);
  console.log('storedUser:', storedUser);

  // JSON.parse creates a new value from the given string
  const parsedInstructors = JSON.parse(storedInstructors);
  const parsedUser = JSON.parse(storedUser);

  console.log('parsedInstructors:', parsedInstructors);
  console.log('parsedUser:', parsedUser);

  console.log(parsedUser === user);

}
// stringifyAndParse();


// These helper function will allow us to predictably interact with localStorage
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

const main = () => {
  // test out local storage here...

}

main();
