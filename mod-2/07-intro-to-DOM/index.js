// console.log("hello");

const itzelsHobbies = ["Crocheting", "reading", "writing", "calligraphy", "sleeping"];

const hobbiesList = document.getElementById("itzy-hobbies"); 

const createList = (arr) => {
  arr.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.innerText = hobby;
    hobbiesList.append(listItem);
    console.log(listItem, hobby);
  });
}

// let el = document.getElementById("get-me");
// el.textContent = "hello"

// el.remove()

const main = () => {
  //runner function
  // let el = document.getElementById("get-me");
  createList(itzelsHobbies);
}

main()

/**
 * How do we get started? 
 * 1. Connect the HTML with the JS file! 
 * 2. Check the connection! Console.log("hello world!"); 
 * 
 * CRUD: 
 * 
 * Create - 
 *  - document.createElement()
 *  - In the parenthesis, identify what element we want to create
 * 
 * Read - 
 *  - document.getElementById()
 *  - document.querySelector() -> select by #id, .class, element
 *  - document.getElementByClass()
 *  - element.innerText 
 *  - element.textContent
 * Update - 
 *  - .append() to update the contents of a parent element 
 *  - alter the innerText or textContent of a element: 
 *  - element.textContent = "hello"
 * Delete - 
 *  - method .remove()
 *  - target the element we want to delete
 */