const email = document.querySelector('#email-id')
const submit = document.querySelector('.submit-button')
const emailError = document.querySelector('.error')

submit.addEventListener('click', () => {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Enter a valid email address';
    } else {
        emailError.textContent = '';
    }
})