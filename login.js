const button = document.getElementsByClassName("btn");

loginIn = event => {
    event.preventDefault();


let username = document.getElementById('email').value;
let password = document.getElementById('password').value;

alert('Login successful!');
}

button.addEventListener(('submit'), loginIn());