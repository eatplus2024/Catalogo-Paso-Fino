document.addEventListener("DOMContentLoaded", () => {
    // Establecer imagen de fondo
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1482192501347-26a1bcb08b75')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Cambiar el título principal
    const mainTitle = document.getElementById("main-title");
    mainTitle.textContent = "Catálogo Sombrerería Paso Fino";

    // Crear galería de videos
    const videos = [
        {
            title: "Sombrero Veguero",
            description: "Sombrero tradicional del llano, ideal para todas las ocasiones.",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-veguero",
        },
        {
            title: "Sombrero Llanero",
            description: "Elegante sombrero de ala ancha, perfecto para el campo.",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-llanero",
        },
        {
            title: "Sombrero de Fiesta",
            description: "Sombrero único para eventos especiales, con estilo y elegancia.",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-fiesta",
        },
        {
            title: "Sombrero Tradicional",
            description: "Hecho a mano con materiales de calidad, para la gente del llano.",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
            link: "https://eatcomercial01.wixsite.com/website-1/sombrero-tradicional",
        },
    ];

    const catalogGallery = document.getElementById("catalog-gallery");

    videos.forEach((video) => {
        // Crear contenedor del video
        const item = document.createElement("div");
        item.className = "item";

        // Agregar video
        const iframe = document.createElement("iframe");
        iframe.src = video.videoUrl;
        iframe.width = "100%";
        iframe.height = "200px";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        item.appendChild(iframe);

        // Agregar información del video
        const info = document.createElement("div");
        info.className = "info";

        const title = document.createElement("h3");
        title.textContent = video.title;
        info.appendChild(title);

        const description = document.createElement("p");
        description.textContent = video.description;
        info.appendChild(description);

        const link = document.createElement("a");
        link.href = video.link;
        link.target = "_blank";
        link.textContent = "Ver más";
        info.appendChild(link);

        item.appendChild(info);
        catalogGallery.appendChild(item);
    });
});
