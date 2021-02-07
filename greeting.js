const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_NAME = "currentUser",
  SHOWING_CN = "showing";

function paingGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.interText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null) {
    // she is not
  } else {
    // she is
    paingGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
