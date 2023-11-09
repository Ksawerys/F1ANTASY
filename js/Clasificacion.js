const personas = [
    JSON.parse(localStorage.getItem("user")),
    JSON.parse(localStorage.getItem("bot1")),
    JSON.parse(localStorage.getItem("bot2"))
  ];

  
  
  personas.sort((a, b) => b.puntos - a.puntos);
  
  const topTresPersonas = personas.slice(0, 3);
  
  document.addEventListener('DOMContentLoaded', () => {
    const jugadorElements = document.querySelectorAll('.informacion');
  
    for (let i = 0; i < jugadorElements.length; i++) {
      const jugador = topTresPersonas[i];
      const nombreElement = jugadorElements[i].querySelector('#Nick');
      const puntuacionElement = jugadorElements[i].querySelector('#Puntuacion');
      const imagenElement = document.getElementById(`img${i}`)
  
      nombreElement.textContent = jugador.nombre;
      puntuacionElement.textContent = `Puntuacion: ${jugador.puntos}`;
      
      // Cambia la ruta de la imagen
      const imagenSrc = `../Perfiles/${jugador.nombre}.png`;
      imagenElement.src = imagenSrc;
    }
  });
  