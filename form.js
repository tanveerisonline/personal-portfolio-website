let checkEmail;

const validateForm = () => {
  const validEmail = checkEmail();
  return validEmail;
};

const queryForm = document.querySelector('#query-form');
queryForm.addEventListener('submit', (event) => {
  if (!validateForm()) event.preventDefault();
});

let validForm;
let InValidForm;
checkEmail = () => {
  const inputElement = document.querySelector('#email_id');
  const inputFeedbackElement = document.querySelector('#email-response');
  const regExp = /^([a-z0-9_]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (regExp.test(inputElement.value)) {
    validForm(inputElement, inputFeedbackElement);
    return true;
  }
  InValidForm(inputElement, inputFeedbackElement);

  return false;
};

validForm = (inputElement, inputFeedbackElement) => {
  inputElement.classList.add('form-valid');
  inputElement.classList.remove('form-invalid');
  inputFeedbackElement.classList.add('color-green');
  inputFeedbackElement.classList.remove('color-red');
  inputFeedbackElement.innerText = 'Verified';
};
InValidForm = (inputElement, inputFeedbackElement) => {
  inputElement.classList.remove('form-valid');
  inputElement.classList.add('form-invalid');
  inputFeedbackElement.classList.remove('color-green');
  inputFeedbackElement.classList.add('color-red');
  inputFeedbackElement.innerText = `Please Enter valid ${inputElement.placeholder} Id`;
};
