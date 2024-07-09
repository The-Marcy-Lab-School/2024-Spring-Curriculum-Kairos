import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { testLocalStorage } from './data-layer/local-storage-test.js';
import {
  getAllTodos,
  initializeTodosIfEmpty,
  addTodo,
  toggleTodoComplete,
  deleteTodo
} from './data-layer/local-storage.js';

const renderTodos = () => {
  // get all todos from localStorage
  const todos = getAllTodos();

  // empty out the existing list
  const todoList = document.querySelector("#todos-list");
  todoList.innerHTML = "";

  // re-render the ENTIRE localStorage list
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.todoTitle;
    todoList.append(li);
  });
}

// helper functions
const handleSubmit = (e) => {
  // stop the reload/redirect
  e.preventDefault();

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const newTodo = Object.fromEntries(formData);

  // add more properties to the newTodo object
  newTodo.isComplete = false;
  newTodo.uuid = uuidv4();

  console.log('here is your data:', newTodo);

  // Add newTodo to localStorage
  addTodo(newTodo);

  // And re-render ALL of the todos that exist in localStorage
  renderTodos()

  form.reset();
}

// runner function
const main = () => {
  const form = document.querySelector("#new-todo-form");
  form.addEventListener('submit', handleSubmit);

  // when we start the app, initialize the todos and render
  initializeTodosIfEmpty();
  renderTodos();
}

main();

