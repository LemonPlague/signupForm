const passwordMessage = document.querySelector('#passwordcontainer p');
const button = document.querySelector('button');

//disable the submit button by default
button.disabled = true;
button.style.backgroundColor = "gray";

//ensure passwords in each field match
function checkpass() {
    if (document.querySelector('#password').value == 
    document.querySelector('#passconfirm').value) {
        button.disabled = false;
        button.style.backgroundColor = "";
    } else {
        passwordMessage.textContent = 'Passwords do not match.';
        button.disabled = true;
        button.style.backgroundColor = "gray";
    }
}