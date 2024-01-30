const button = document.querySelector(".btn");

let loginIn = (e) => {
  e.preventDefault();

  let useremail = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.querySelector("#name").value;

  let success = () => {
    if (useremail.length === "" && password.length === "" && username === "") {
      alert("Please insert your details");
    } else if (useremail === "" || password === "" || username === "") {
      alert("Insert your details");
    } else if (password.length <= 8) {
      alert("Not a strong password");
    } else if (!/@/.test(email)) {
      alert("Invalid Email address");
    } else {
      alert("Login successful!");
    }
  };
  success();
};

button.addEventListener("click", loginIn);
