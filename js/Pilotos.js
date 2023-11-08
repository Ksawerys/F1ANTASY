




window.addEventListener('DOMContentLoaded', function (){
    const buttonRol1 = document.getElementById("botonRol1")
    const buttonRol2 = document.getElementById("botonRol2")
    let usuario = JSON.parse(localStorage.getItem("user"))
    let pilotoImg = document.getElementById("pilotoImg")    
    let pilotoImg2 = document.getElementById("pilotoImg2")
    let labelNombre = document.getElementById("labelNombre")
    let labelNombreJugador = document.getElementById("labelNombrePlayer")
    let labelRol = document.getElementById("labelRol")
    let labelNombre2 = document.getElementById("labelNombre2")
    let labelNombreJugador2 = document.getElementById("labelNombrePlayer2")
    let labelRol2 = document.getElementById("labelRol2")

    const pilotos = usuario.pilotos 
    pilotoImg.src = `../FotosPilotos/${pilotos[0].nombre}.jpg`
    pilotoImg2.src = `../FotosPilotos/${pilotos[1].nombre}.jpg`

    labelNombre.textContent = `${pilotos[0].nombre} ${pilotos[0].apellidos}`
    labelNombre2.textContent = `${pilotos[1].nombre} ${pilotos[1].apellidos}`

    labelNombreJugador.textContent = usuario.nombre
    labelNombreJugador2.textContent = usuario.nombre

    buttonRol1.textContent = usuario.pilotos[0].rol
    buttonRol2.textContent = usuario.pilotos[1].rol
    labelRol.textContent = buttonRol1.textContent
    labelRol2.textContent = buttonRol2.textContent
    
    
})


const openOffcanvasButtons = document.querySelectorAll(".btn.btn-primary.stretched-link");
      
      openOffcanvasButtons.forEach((button, index) => {
          const targetOffcanvasId = `#offcanvasExample${index + 1}`;
          const offcanvas = new bootstrap.Offcanvas(document.querySelector(targetOffcanvasId));
          
          button.addEventListener("click", () => {
              offcanvas.show();
          })
      })


function updateButton1(text) {
    let usuario = JSON.parse(localStorage.getItem("user"))
    const button = document.getElementById("botonRol1")
    button.textContent = text  
    labelRol.textContent = button.textContent
     
          
}

function updateButton2(text) {
    const button = document.getElementById("botonRol2")
    button.textContent = text 
    labelRol2.textContent = button.textContent       
          
}