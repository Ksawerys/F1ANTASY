import { Persona } from "./Clases.js"

let inputNombre = document.getElementById('name')
let inputApellido = document.getElementById('sname')
let inputNick = document.getElementById('nick')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')
let inputPasswordVerified = document.getElementById('passwordVerified')
let botonRegistrarse = document.getElementById("registrarsePulsado");






function validNombre(nombre) {
    let expresionRegular = /^[a-zA-Z]{2,20}$/
    let correct = expresionRegular.test(nombre)
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
    let expresionRegular = /^[a-zA-Z]{2,20}$/
    let correct = expresionRegular.test(apellido)
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
    let expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/     
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
    let expresionRegular = /^[a-zA-Z0-9_]{4,10}$/      
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
    let expresionRegular = /^[\w*#$]{6,12}$/      
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
    validPassword(inputPassword.value)    
})



botonRegistrarse.addEventListener("click", function() {
    let nombreCorrecto = validNombre(inputNombre.value)
    let apellidoCorrecto = validApellidos(inputApellido.value)
    let correoCorrecto = validCorreoElectronico(inputEmail.value)
    let nickCorrecto = validNick(inputNick.value)
    let passwordCorrect = validPassword(inputPassword.value)
    let passwordVerifiedCorrect = passwordVerified(inputPasswordVerified.value,inputPassword.value)

    if(nombreCorrecto && apellidoCorrecto && correoCorrecto && nickCorrecto && passwordCorrect && passwordVerifiedCorrect){
        let usuario = new Persona(inputNombre.value,inputApellido.value,inputNick.value,inputEmail.value,inputPassword.value,[])

        localStorage.setItem("user",JSON.stringify(usuario))
        // console.log("Persona guardada correctamente")
        window.location.href = "../PantallaInicial.html"
    }
    
  
});
