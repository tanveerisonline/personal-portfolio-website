const email = document.querySelector("#email-id");
const submit = document.querySelector(".submit-button");
const emailError = document.querySelector(".error");

submit.addEventListener("click", () => {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      "please enter a valid email id or write your email id in lower case";
  } else {
    emailError.textContent = "";
  }
});
