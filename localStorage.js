let formData = {
  name: "",
  email: "",
  message: "",
};

const loadFormData = () => {
  const persistantData = localStorage.getItem("form");
  if (persistantData) {
    const data = JSON.parse(persistantData);
    name_.value = data.name;
    email.value = data.email;
    message.value = data.message;
    formData = data;
  }
};

const stringfyForm = () => {
  const data = JSON.stringify(formData);
  localStorage.setItem("form", data);
};

name_.addEventListener("input", () => {
  formData.name = name_.value;
  stringfyForm();
});
email.addEventListener("input", () => {
  formData.email = email.value;
  stringfyForm();
});
message.addEventListener("input", () => {
  formData.message = message.value;
  stringfyForm();
});

loadFormData();
