var userName = document.getElementById("username")
var userPassword = document.getElementById("pass")
var submitBtn = document.querySelector("#submit")
var submitMessage = document.querySelector(".message")

submitBtn.addEventListener("click", check)

function check () {
    checkUsername()
    checkPassword()

    if(userName.value === "" && userPassword.value === "") {
        submitMessage.innerHTML = "*Please enter a username and a password!"
    }else if(userName.value === "" && userPassword.value === "123456789"){
        submitMessage.innerHTML = "*please enter a username!"       
    }else if(userName.value !== "new_user"&& userPassword.value === "123456789"){
        submitMessage.innerHTML = "*Please, enter a valid username!"       
    }else if(userName.value === "new_user"&& userPassword.value === ""){
        submitMessage.innerHTML = "*Please, enter a password!"       
    }else if(userName.value === "new_user"&& userPassword.value !== "123456789"){
        submitMessage.innerHTML = "*Please, enter a valid password!"       
    }else if(userName.value !== "new_user"&& userPassword.value === ""){
        submitMessage.innerHTML = "*Please, enter a valid username and a password!"       
    }else if(userName.value === "" && userPassword.value !== "123456789"){
        submitMessage.innerHTML = "*Please, enter a username and a valid password!"       
    }else if(userName.value !== "new_user"&& userPassword.value !== "123456789"){
        submitMessage.innerHTML = "*Please, enter a valid username and a valid password!"       
    }else{
        submitMessage.innerHTML = "*Successful login!"
    }
}

function checkUsername () {
    if (userName.value === "new_user") {
        document.querySelector(".username-container input").classList.add("corect")
        document.querySelector(".corect-username").classList.add("corect-icon")
        document.querySelector(".username-container input").classList.remove("wrong")
        document.querySelector(".wrong-username").classList.remove("wrong-icon")
    }else {
        document.querySelector(".username-container input").classList.add("wrong")
        document.querySelector(".wrong-username").classList.add("wrong-icon")
        document.querySelector(".username-container input").classList.remove("corect")
        document.querySelector(".corect-username").classList.remove("corect-icon")
    }
}

function checkPassword () {
    if (userPassword.value === "123456789") {
        document.querySelector(".password-container input").classList.add("corect")
        document.querySelector(".corect-password").classList.add("corect-icon")
        document.querySelector(".password-container input").classList.remove("wrong")
        document.querySelector(".wrong-password").classList.remove("wrong-icon")
    }else {
        document.querySelector(".password-container input").classList.add("wrong")
        document.querySelector(".wrong-password").classList.add("wrong-icon")
        document.querySelector(".password-container input").classList.remove("corect")
        document.querySelector(".corect-password").classList.remove("corect-icon")
    }
}

