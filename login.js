const button = document.querySelector(".btn");

let loginIn = (e) => {
e.preventDefault();


let username = document.getElementById('email').value;
let password = document.getElementById('password').value;



let success = () => {
    
    if(username.length === "" && password.length === "" ) {
        alert('Please insert your details');
    }else if(username === "" && password === ""){
        alert('Insert your details');
    }
    else if(password.length <= 8 ){
        alert('Not a strong password');
    }else {
        alert('Login successful!');
    }
}
success();

}

button.addEventListener('click', loginIn);