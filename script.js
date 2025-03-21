const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

let allTodos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    allTodos.push(todoText);
    todoInput.value = "";
  }
};
