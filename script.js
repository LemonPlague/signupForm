const passwordField1 = document.querySelector('#password input');
const passwordField2 = document.querySelector('#passwordConfirm input');
const passwordMessage = document.querySelector('#password p');
const button = document.querySelector('button');

//disable the submit button by default
button.disabled = true;
button.style.backgroundColor = gray;

//ensure passwords in each field match
if (passwordField1.textContent != passwordField2.textContent) {
    passwordMessage.textContent = 'Passwords do not match';
    passwordMessage.textContent.style.color = red;
}