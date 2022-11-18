let query_Form = document.querySelector("#query-form");
query_Form.addEventListener("submit", function (event) {
  if (!validateForm()) event.preventDefault();
});
let validateForm = () => {
  var valid_Email = checkEmail();
  return valid_Email;
};

let checkEmail = () => {
  let inputElement = document.querySelector("#email_id");
  let inputFeedbackElement = document.querySelector("#email-response");
  let regExp = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (regExp.test(inputElement.value)) {
    Valid_form(inputElement, inputFeedbackElement);
    return true;
  } else {
    InValid_form(inputElement, inputFeedbackElement);
  }
  return false;
};

let Valid_form = (inputElement, inputFeedbackElement) => {
  inputElement.classList.add("form-valid");
  inputElement.classList.remove("form-invalid");
  inputFeedbackElement.classList.add("color-green");
  inputFeedbackElement.classList.remove("color-red");
  inputFeedbackElement.innerText = "Verified";
};
let InValid_form = (inputElement, inputFeedbackElement) => {
  inputElement.classList.remove("form-valid");
  inputElement.classList.add("form-invalid");
  inputFeedbackElement.classList.remove("color-green");
  inputFeedbackElement.classList.add("color-red");
  inputFeedbackElement.innerText = `Please Enter valid ${inputElement.placeholder} Id`;
};
