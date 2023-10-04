const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

// save log in input as a username into local storage, then hide log in form
function onSubmitLogin(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

// paint greeting text and todo lists
function paintGreetings(userName) {
  greeting.innerText = `Welcome ${userName}.`;
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}

// if local storage already has user name, skip log in process
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitLogin);
} else {
  paintGreetings(savedUserName);
}

/* To Do List */

// initial todo array
let todos = [];

// when user submit todo, push it into todo array and save it, then paint lists
function onSubmitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  todos.push(newTodoObj);
  saveTodos();
  paintTodo(newTodoObj);
}

// create html elements and arrange them and append them to todo list
// if button clicked, delete the list
function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

// get parent of the button (li) and remove it from the html and local storage
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

todoForm.addEventListener("submit", onSubmitTodo);

// turn array into string and save it to local storage
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// list initialization
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;

  todos.forEach(paintTodo);
}
