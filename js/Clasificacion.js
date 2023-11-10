window.onload = function () {
    document.body.style.zoom = "90%"
};

document.addEventListener('DOMContentLoaded', () => {
    const personas = [
        JSON.parse(localStorage.getItem("user")),
        JSON.parse(localStorage.getItem("bot1")),
        JSON.parse(localStorage.getItem("bot2"))
    ];

    // Filtra los jugadores que no están definidos en el localStorage
    const jugadoresDefinidos = personas.filter(jugador => jugador);

    // Ordena los jugadores por puntos de mayor a menor
    jugadoresDefinidos.sort((a, b) => b.puntos - a.puntos);

    // Selecciona los tres primeros jugadores
    const topTresPersonas = jugadoresDefinidos.slice(0, 3);

    // Muestra la información en la página
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