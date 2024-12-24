document.addEventListener("DOMContentLoaded", () => {
    // Cambiar el título principal
    const mainTitle = document.getElementById("main-title");
    mainTitle.textContent = "Catálogo Sombrerería Paso Fino";

    // Crear galería de videos
    const videos = [
        {
            title: "Sombrero Veguero",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-veguero",
        },
        {
            title: "Sombrero Llanero",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-llanero",
        },
        {
            title: "Sombrero de Fiesta",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-fiesta",
        },
        {
            title: "Sombrero Tradicional",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-tradicional",
        },
    ];

    const catalogGallery = document.getElementById("catalog-gallery");

    videos.forEach((video) => {
        // Crear contenedor del video
        const item = document.createElement("div");
        item.className = "item";

        // Agregar iframe del video
        const iframe = document.createElement("iframe");
        iframe.src = video.videoUrl;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        item.appendChild(iframe);

        // Crear overlay
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        // Agregar título
        const title = document.createElement("h3");
        title.textContent = video.title;
        overlay.appendChild(title);

        // Agregar botón
        const link = document.createElement("a");
        link.href = video.link;
        link.target = "_blank";
        link.textContent = "Ver más";
        overlay.appendChild(link);

        item.appendChild(overlay);
        catalogGallery.appendChild(item);
    });
});
