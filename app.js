const button = document.querySelector(".btn");
const button2 = document.querySelector("#btn");

let getStart = (e) => {
e.preventDefault();

window.location.href = 'signup/sign.html';
}

button.addEventListener('click', getStart)
let getStart2 = (e) => {
e.preventDefault();

window.location.href = 'signup/sign.html';
}

button2.addEventListener('click', getStart2)