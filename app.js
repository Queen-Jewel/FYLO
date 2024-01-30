const button = document.querySelector(".btn");
const button2 = document.querySelector("#btn");
const useremail = document.querySelector("#email").value;

let getStart = (e) => {
  e.preventDefault();

  if (useremail === "") {
    alert("Insert Email!");
  } else {
    window.location.href = "signup/sign.html";
  }
};

button.addEventListener("click", getStart);
let getStart2 = (e) => {
  e.preventDefault();

  if (useremail === "") {
    alert("Insert Email!");
  } else {
    window.location.href = "signup/sign.html";
  }
};

button2.addEventListener("click", getStart2);
