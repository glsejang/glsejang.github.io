
const loginForm = document.getElementById("login-form")
const loginValue = loginForm.querySelector("input:first-child")
const loginBtn = loginForm.querySelector("input:last-child")
const greeting = document.querySelector("#greeting")




function handleBtnCLick(event){
    event.preventDefault()
    const username = loginValue.value;
    localStorage.setItem("username", username)
    loginForm.classList.add("hidden")
    greeting.innerText = "Hello" + username
    greeting.classList.remove("hidden")
}

function greetings(){
    greeting.innerText = "Hello" + username
    greeting.classList.remove("hidden")
}



const savedUsername = localStorage.getItem("username")

if(savedUsername === null){
    loginForm.classList.remove("hidden")
    loginBtn.addEventListener("click", handleBtnCLick )
}else {
    greeting.classList.remove("hidden")
    greeting.innerText = "Hello" + savedUsername;
    
}