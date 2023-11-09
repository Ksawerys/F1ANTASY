




window.addEventListener('DOMContentLoaded', function (){    
    //Objetios localStorage
    let pilotosList = JSON.parse(localStorage.getItem("pilotos"))
    
    let usuario = JSON.parse(localStorage.getItem("user"))

    //Elementos HTML
    const buttonRol1 = document.getElementById("botonRol1")
    const buttonRol2 = document.getElementById("botonRol2")
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
    const pilotoUsuario1 = pilotosList.find(piloto => piloto.nombre === usuario.pilotos[0].nombre)
    if (pilotoUsuario1) {
        pilotoUsuario1.rol = usuario.pilotos[0].rol
    }
    const pilotoUsuario2 = pilotosList.find(piloto => piloto.nombre === usuario.pilotos[1].nombre)
    if (pilotoUsuario2) {
        pilotoUsuario2.rol = usuario.pilotos[1].rol
    }
    labelRol.textContent = buttonRol1.textContent
    labelRol2.textContent = buttonRol2.textContent

    localStorage.setItem("user",JSON.stringify(usuario))
    localStorage.setItem("pilotos",JSON.stringify(pilotosList))
    
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
    const button2 = document.getElementById("botonRol2")   
    let titular = "Titular"
    let suplente = "Suplente"
    button.textContent = text  
    labelRol.textContent = button.textContent     
    if(text == titular){
        button2.textContent = suplente 
        labelRol2.textContent = button2.textContent
        usuario.pilotos[0].rol = titular
        
        usuario.pilotos[1].rol = suplente
        
    }else{
        button2.textContent = titular 
        labelRol2.textContent = button2.textContent 
        usuario.pilotos[0].rol = suplente
        
        usuario.pilotos[1].rol = titular
        
    }
    localStorage.setItem("user",JSON.stringify(usuario))
    
    location.reload() 
              
}

function updateButton2(text) {    
    let usuario = JSON.parse(localStorage.getItem("user"))
    const button = document.getElementById("botonRol1")
    const button2 = document.getElementById("botonRol2")   
    let titular = "Titular"
    let suplente = "Suplente"
    button2.textContent = text  
    labelRol2.textContent = button2.textContent     
    if(text == titular){
        button.textContent = suplente
        labelRol.textContent = button.textContent
        usuario.pilotos[1].rol = titular
        
        usuario.pilotos[0].rol = suplente
        
    }else{
        button.textContent = titular
        labelRol.textContent = button.textContent
        usuario.pilotos[1].rol = suplente
        
        usuario.pilotos[0].rol = titular
        
    }
    localStorage.setItem("user",JSON.stringify(usuario))
    location.reload()      
          
}