let usuario = JSON.parse(localStorage.getItem("user"))

let nombreLabel = document.getElementById("nombreLabel")
let apellidoLabel = document.getElementById("apellidoLabel")
let nickLabel = document.getElementById("nickLabel")
let emailLabel = document.getElementById("emailLabel")





    



window.addEventListener('DOMContentLoaded', function (){
    nombreLabel.textContent = usuario.nombre
    apellidoLabel.textContent = usuario.apellidos
    nickLabel.textContent = usuario.nick
    emailLabel.textContent = usuario.correo
});
