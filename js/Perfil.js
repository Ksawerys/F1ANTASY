let usuario = JSON.parse(localStorage.getItem("user"))

let nombreLabel = document.getElementById("nombreLabel")
let apellidoLabel = document.getElementById("apellidoLabel")
let nickLabel = document.getElementById("nickLabel")
let emailLabel = document.getElementById("emailLabel")
let botonCambio = document.getElementById("botonCambioPulsado")
let inputPassword = document.getElementById("nuevaPass")
let inputPasswordVerified = document.getElementById("nuevaPassValid")

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




window.addEventListener('DOMContentLoaded', function (){
    nombreLabel.value = usuario.nombre
    apellidoLabel.value = usuario.apellidos
    nickLabel.textContent = usuario.nick
    emailLabel.value = usuario.correo
});

botonCambio.addEventListener("click", function() {
    
    let passwordCorrect = validPassword(inputPassword.value)
    let passwordVerifiedCorrect = passwordVerified(inputPasswordVerified.value,inputPassword.value)

    if(passwordCorrect && passwordVerifiedCorrect){
        usuario.nombre = nombreLabel.value
        usuario.password = inputPassword.value
        usuario.apellidos = apellidoLabel.value
        usuario.correo = emailLabel.value

        localStorage.setItem("user",JSON.stringify(usuario))
        alert("Nuevos datos guardados con exito")
    }
    
  
});

