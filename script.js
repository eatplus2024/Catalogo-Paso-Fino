document.addEventListener("DOMContentLoaded", () => {
    // Contenedor principal del catálogo
    const catalogContainer = document.getElementById("catalog-container");

    // Lista de sombreros con sus datos
    const sombreros = [
        {
            title: "Sombrero Llanero",
            videoSrc: "https://example.com/video1.mp4",
            whatsappLink: "https://wa.me/1234567890?text=Hola,%20quiero%20cotizar%20el%20Sombrero%20Llanero"
        },
        {
            title: "Sombrero Vaquero",
            videoSrc: "https://example.com/video2.mp4",
            whatsappLink: "https://wa.me/1234567890?text=Hola,%20quiero%20cotizar%20el%20Sombrero%20Vaquero"
        }
        // Agrega más sombreros aquí si es necesario
    ];

    // Generar dinámicamente cada sombrero
    sombreros.forEach((sombrero) => {
        // Crear contenedor del video
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        // Título
        const title = document.createElement("h2");
        title.textContent = sombrero.title;

        // Video
        const video = document.createElement("video");
        video.src = sombrero.videoSrc;
        video.controls = true;

        // Botón de cotizar
        const button = document.createElement("a");
        button.href = sombrero.whatsappLink;
        button.target = "_blank";
        button.textContent = "Cotizar";

        // Añadir elementos al contenedor del video
        videoItem.appendChild(title);
        videoItem.appendChild(button);
        videoItem.appendChild(video);

        // Añadir el contenedor del video al catálogo
        catalogContainer.appendChild(videoItem);
    });
});
