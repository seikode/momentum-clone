const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const div = document.querySelector("#greetingRename");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function rename() {
  window.location.reload();
  window.localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  div.classList.remove(HIDDEN_CLASSNAME);
  const button = document.createElement("button");
  button.innerText = "↻";
  button.addEventListener("click", rename);
  div.appendChild(button);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
