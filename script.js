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
        document.querySelector('#password').style.outline = "";
        document.querySelector('#passconfirm').style.outline = "";
    } else {
        passwordMessage.textContent = 'Passwords do not match.';
        button.disabled = true;
        button.style.backgroundColor = "gray";
        document.querySelector('#password').style.outline = "1px solid red";
        document.querySelector('#passconfirm').style.outline = "1px solid red";
    }
}