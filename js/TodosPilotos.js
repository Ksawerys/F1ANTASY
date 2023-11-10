




document.addEventListener('DOMContentLoaded',function(){
    let ListPilots = JSON.parse(localStorage.getItem("pilotos"))
    ListPilots.sort((a, b) => {
        
        const nombreA = a.nombre.toLowerCase()
        const nombreB = b.nombre.toLowerCase()
      
        if (nombreA < nombreB) {
          return -1
        }
        if (nombreA > nombreB) {
          return 1
        }
        return 0
      })

    console.log(ListPilots)
    var localizarPiloto = 1
    for (var i = 0; i < ListPilots.length; i++) {        
        var labelNombre = document.getElementById("labelNombrePlayer" + localizarPiloto);
        var labelRol = document.getElementById("labelRol" + localizarPiloto);
        localizarPiloto++
        // Verificamos si los elementos existen antes de intentar asignar valores
        if (labelNombre && labelRol) {
            if(ListPilots[i].propiedadJugador == 0){
                labelNombre.innerHTML = ""
            }else{
                labelNombre.innerHTML = ListPilots[i].propiedadJugador
            }          
          labelRol.innerHTML = ListPilots[i].rol
        }
      }
})