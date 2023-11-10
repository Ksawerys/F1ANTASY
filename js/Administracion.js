document.getElementById('quitarFiltroBtn').addEventListener('click', function () {
    var alertDiv = document.querySelector('.alert')
    alertDiv.style.display = 'block'
    alertDiv.style.opacity = 1

    setTimeout(function () {
        alertDiv.style.opacity = 0
    }, 4600)
    setTimeout(function () {
        alertDiv.style.display = 'none'
    }, 5000)
    var video = document.getElementById('videoFondo')
    video.classList.toggle('sin-filtro')
    quitarFiltroBtn.remove()
});
