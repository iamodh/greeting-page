// const loginForm = document.querySelector(".login-form");
// const loginInput = document.querySelector(".login-input");
// const greeting = document.querySelector(".greeting");
// const loginFormContainer = document.querySelector(".login-form-container");
// const todoFormContainer = document.querySelector(".todo-form-container");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "userName";

// // save log in input as a username into local storage, then hide log in form
// function onSubmitLogin(event) {
//   event.preventDefault();
//   const userName = loginInput.value;
//   loginFormContainer.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY, userName);
//   paintGreetings(userName);
// }

// // paint greeting text and todo lists
// function paintGreetings(userName) {
//   greeting.innerText = `Welcome ${userName}.`;
//   greeting.classList.remove("hidden");
//   todoFormContainer.classList.remove("hidden");
// }

// // if local storage already has user name, skip log in process
// const savedUserName = localStorage.getItem(USERNAME_KEY);

// if (savedUserName === null) {
//   loginFormContainer.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onSubmitLogin);
// } else {
//   paintGreetings(savedUserName);
// }
console.log("ABC");
