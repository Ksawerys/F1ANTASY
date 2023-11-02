import { Persona } from "./Clases.js"


var usuario = JSON.parse(localStorage.getItem("user"))
var inputCorreo = document.getElementById("inputCorreo")
var inputPassword = document.getElementById("inputPassword")
var buttonIniciarSesion = document.getElementById("iniciarSesionButton")


buttonIniciarSesion.addEventListener('click', function () {
    if(!validCorreoElectronico(inputCorreo.value)){
        inputCorreo.style.borderColor = "red"
        inputCorreo.style.borderWidth = "3px"
    }if(!validPassword(inputPassword.value)){
        inputPassword.style.borderColor = "red"
        inputPassword.style.borderWidth = "3px"
    }

    if(login(usuario,inputCorreo.value,inputPassword.value)){
        //Inicio sesion correcto. 
    }

})

function login(usuario,checkEmail,checkPassword){
    if(usuario.correo == checkEmail){
        if(usuario.password == checkPassword){
            return true
        }else{
            alert("Contraseña incorrecta")
            return false
        }
    }else{
        alert("Email no encontrado")
        return false
    }
}

function validPassword(password) {
    var expresionRegular = /^[\w*#$]{6,12}$/      
    if (expresionRegular.test(password)) {
        inputPassword.style.borderColor = ""
        inputPassword.style.borderWidth = "1px"
        return true
    } else {
        inputPassword.style.borderColor = "red"
        inputPassword.style.borderWidth = "3px"
        return false    
    }
}

function validCorreoElectronico(correo) {    
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/     
    if (expresionRegular.test(correo)) {
        inputCorreo.style.borderColor = ""
        inputCorreo.style.borderWidth = "1px"
        return true
    } else {
        inputCorreo.style.borderColor = "red"
        inputCorreo.style.borderWidth = "3px"
        return false
    }
}