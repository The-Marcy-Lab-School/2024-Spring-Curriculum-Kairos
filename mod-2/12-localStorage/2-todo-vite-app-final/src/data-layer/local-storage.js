import initialTodos from './todos.json';

console.log(initialTodos)

// - import the default list from todos.json
// - put that default list in localStorage
// - whenever I add/remove todos, I'm adding/removing
// values from the localStorage array
// - whenever the localStorage array changes, render
// everything in localStorage

//////////////////////////////////
// Generic localStorage Helpers //
//////////////////////////////////

// sets a new key-value pair in local storage.
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

// tries to get a value from local storage.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
};

///////////////////////
// Todo List Helpers //
///////////////////////

// sets the todos Array in localStorage with the key 'todos'
export const setTodos = (todos) => setLocalStorageKey('todos', todos);

// returns the Array of all todo Objects from localStorage
export const getAllTodos = () => getLocalStorageKey('todos');


// initializes todos using the todos.json file
export const initializeTodosIfEmpty = () => {
  const existingTodos = getAllTodos();
  if (!existingTodos) {
    setTodos(initialTodos);
    // setLocalStorageKey('todos', initialTodos)
  }
};

// adds a new todo Object to the Array of todos in localStorage
export const addTodo = (todo) => {
  const existingTodos = getAllTodos();
  const newTodosArray = [...existingTodos, todo];
  setTodos(newTodosArray);
}
