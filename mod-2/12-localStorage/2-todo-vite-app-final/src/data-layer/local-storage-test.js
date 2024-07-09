export const testLocalStorage = () => {
  initializeTodosIfEmpty();
  console.log('Default Todos:');
  console.log(getAllTodos());
  // confirm that default todos were added

  addTodo({
    uuid: 1,
    title: 'trash',
    isComplete: false
  });
  console.log('Todo Added:');
  console.log(getAllTodos());
  // confirm new todo was added

}