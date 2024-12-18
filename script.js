document.addEventListener("DOMContentLoaded", function () {
    // Reproducir el primer video automáticamente cuando se carga la página
    const firstVideo = document.querySelector('iframe');
    if (firstVideo) {
        firstVideo.src += "?autoplay=1";
    }

    // Función para ajustar la visibilidad del video
    function resizeVideos() {
        const videos = document.querySelectorAll('iframe');
        videos.forEach(video => {
            // Ajustar la altura del video según el tamaño de la pantalla
            const windowWidth = window.innerWidth;
            if (windowWidth <= 768) {
                video.style.height = '250px';  // Más pequeño en móviles
            } else {
                video.style.height = '360px';  // Tamaño estándar en pantallas más grandes
            }
        });
    }

    // Función para mostrar u ocultar el menú
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    // Inicializar ajustes de tamaño de video
    resizeVideos();
    window.addEventListener('resize', resizeVideos);

    // Si se desea más interactividad, aquí se pueden agregar más eventos
    // Ejemplo: Mostrar un mensaje al hacer clic en el botón de cotizar
    const cotizarButtons = document.querySelectorAll('.cotizar-btn');
    cotizarButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert("¡Serás redirigido a WhatsApp para cotizar!");
        });
    });
});

// Este bloque hace que el primer video sea el que se reproduce inicialmente
window.addEventListener('load', () => {
    // Seleccionamos el primer iframe y le añadimos autoplay
    const firstVideo = document.querySelector('iframe');
    if (firstVideo) {
        firstVideo.src += "?autoplay=1";
    }
});

// Asegura que los botones de cotización abran correctamente WhatsApp
document.querySelectorAll('.cotizar-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        const videoTitle = event.target.previousElementSibling.textContent;  // Título del sombrero
        const message = encodeURIComponent(`Quiero cotizar el sombrero: ${videoTitle}`);
        const phoneNumber = '1234567890';  // Número de WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    });
});
