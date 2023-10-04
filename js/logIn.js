const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onSubmitLogin(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Welcome ${userName}.`;
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitLogin);
} else {
  paintGreetings(savedUserName);
}
