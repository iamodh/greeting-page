const logInForm = document.querySelector(".logIn-form");
const logInInput = document.querySelector(".logIn-input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleLogIn(event) {
  event.preventDefault();
  const userName = logInInput.value;
  logInForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Welcome ${userName}.`;
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  logInForm.classList.remove(HIDDEN_CLASSNAME);
  logInForm.addEventListener("submit", handleLogIn);
} else {
  paintGreetings(savedUserName);
}
