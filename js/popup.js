var link = document.querySelector(".write-us");
var popup = document.querySelector(".form");
var close = popup.querySelector(".button-close");
var submit = popup.querySelector(".form-button");
var user = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("form-show");

  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.remove("form-error");
});

popup.addEventListener("submit", function(evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
      popup.classList.remove("modal-error");
    }
  }
});
