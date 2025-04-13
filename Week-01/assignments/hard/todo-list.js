/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  // algorithm
  // 1. Create a class named Todo.
  // 2. Initialize an empty array todos in the constructor.
  // 3. Implement the add method to add a todo to the todos array.
  // 4. Implement the remove method to remove a todo from the todos array by index.
  // 5. Implement the update method to update a todo at a given index.
  // 6. Implement the getAll method to return all todos.
  // 7. Implement the get method to return a todo at a given index.
  // 8. Implement the clear method to delete all todos.
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index < 0 || index >= this.todos.length) { 
      return;
    }
    this.todos.splice(index, 1);
  }

  update(index, newTodo) {
    if (index < 0 || index >= this.todos.length){
      return;
    }
    this.todos[index] = newTodo;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index < 0 || index >= this.todos.length) {
      return null;
    }
    return this.todos[index];
  }

  clear() {
    this.todos = [];
  }
}

const todo = new Todo();
todo.add("Learning JavaScript");
todo.add("Build the projects");
console.log(todo.getAll());

module.exports = Todo;

