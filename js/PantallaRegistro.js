//import { Persona } from "./Clases"

var inputNombre = document.getElementById('name')
var inputApellido = document.getElementById('sname')
var inputNick = document.getElementById('nick')
var inputEmail = document.getElementById('email')
var inputPassword = document.getElementById('password')
var inputPasswordVerified = document.getElementById('passwordVerified')
var botonRegistrarse = document.getElementById("registrarsePulsado");






function validNombre(nombre) {
    var expresionRegular = /^[a-zA-Z]{2,20}$/
    var correct = expresionRegular.test(nombre)
    if(correct){
        inputNombre.style.borderColor = ""
        inputNombre.style.borderWidth = "1px"
        return true
    }else{
        inputNombre.style.borderColor = "red"
        inputNombre.style.borderWidth = "3px"
        return false 
    }
}

function validApellidos(apellido) {
    var expresionRegular = /^[a-zA-Z]{2,20}$/
    var correct = expresionRegular.test(apellido)
    if(correct){
        inputApellido.style.borderColor = ""
        inputApellido.style.borderWidth = "1px"
        return true
    }else{
        inputApellido.style.borderColor = "red"
        inputApellido.style.borderWidth = "3px"
        return false 
    }
}
  

function validCorreoElectronico(correo) {    
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/     
    if (expresionRegular.test(correo)) {
        inputEmail.style.borderColor = ""
        inputEmail.style.borderWidth = "1px"
        return true
    } else {
        inputEmail.style.borderColor = "red"
        inputEmail.style.borderWidth = "3px"
        return false
    }
  }

function validNick(nick) {    
    var expresionRegular = /^[a-zA-Z0-9_]{4,10}$/      
    if (expresionRegular.test(nick)) {
        inputNick.style.borderColor = ""
        inputNick.style.borderWidth = "1px"
        return true
    } else {
        inputNick.style.borderColor = "red"
        inputNick.style.borderWidth = "3px"
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

function passwordVerified(passwordVerified,password){
    if(password === passwordVerified){
        inputPasswordVerified.style.borderColor = ""
        inputPasswordVerified.style.borderWidth = "1px"
        return true
    }else{
        inputPasswordVerified.style.borderColor = "red"
        inputPasswordVerified.style.borderWidth = "3px"
        return false 
    }
}

inputPassword.addEventListener("input", function() {
    if(validPassword(inputPassword.value)){
        console.log("password apta")
    }else{
        console.log("password no apta")
    }
});



botonRegistrarse.addEventListener("click", function() {
    var nombreCorrecto = validNombre(inputNombre.value)
    var apellidoCorrecto = validApellidos(inputApellido.value)
    var correoCorrecto = validCorreoElectronico(inputEmail.value)
    var nickCorrecto = validNick(inputNick.value)
    var passwordCorrect = validPassword(inputPassword.value)
    var passwordVerifiedCorrect = passwordVerified(inputPasswordVerified.value,inputPassword.value)

    console.log("buenas")
  
});
