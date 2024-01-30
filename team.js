const button = document.querySelector(".btn");


let returnO = (e) => {
    e.preventDefault();
    let url = '/index.html'
    window.location.href = url
}

button.addEventListener("click", returnO);
