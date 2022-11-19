const userName = document.querySelector('#user_name');
const email = document.querySelector('#email_id');
const message = document.querySelector('#msg');

let formData = {
  name: '',
  email: '',
  message: '',
};

const loadFormData = () => {
  const persistantData = localStorage.getItem('form');
  if (persistantData) {
    const data = JSON.parse(persistantData);
    userName.value = data.name;
    email.value = data.email;
    message.value = data.message;
    formData = data;
  }
};

const stringfyForm = () => {
  const data = JSON.stringify(formData);
  localStorage.setItem('form', data);
};

userName.addEventListener('input', () => {
  formData.name = userName.value;
  stringfyForm();
});
email.addEventListener('input', () => {
  formData.email = email.value;
  stringfyForm();
});
message.addEventListener('input', () => {
  formData.message = message.value;
  stringfyForm();
});

loadFormData();
