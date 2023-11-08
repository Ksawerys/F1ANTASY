
import { pilotosF1 } from "./PilotosList.js"
import { granPremiosF1 } from "./GranPremiosList.js"

const lanzarCarreraButton = document.getElementById("lanzarCarreraButton");

lanzarCarreraButton.addEventListener('click', function () {
    let proximoGranPremioNoDisputado = JSON.parse(localStorage.getItem("proximoGranPremioNoDisputado"))
    let idGP = proximoGranPremioNoDisputado.id 
    
    const pilotosAleatorios = pilotosF1.slice();   
    shuffleArray(pilotosAleatorios)
    
    const puntosASumar = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
    

    pilotosAleatorios.slice(0, puntosASumar.length).forEach((piloto, index) => {
        piloto.puntos += puntosASumar[index];
    });

    
    for (let index = 0; index < granPremiosF1.length; index++) {        
        if(granPremiosF1[index].id == idGP){
            granPremiosF1[index].disputado = true
            granPremiosF1[index].posiciones = pilotosAleatorios.slice()
        }
    } 
    // Ahora ordena los pilotos por puntos en orden descendente
    pilotosAleatorios.sort(compararPorPuntos);
    console.log(pilotosAleatorios)

       
    

});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function compararPorPuntos(a, b) {
    return b.puntos - a.puntos;
}
