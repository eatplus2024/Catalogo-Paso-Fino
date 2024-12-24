document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        {
            title: "Sombrero Veguero",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
        },
        {
            title: "Sombrero Llanero",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
        },
        {
            title: "Sombrero de Fiesta",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
        },
        {
            title: "Sombrero Tradicional",
            videoUrl: "https://www.youtube.com/embed/jxqhhSbrOz0",
        },
    ];

    const gallery = document.getElementById("catalog-gallery");

    // Función para redirigir a WhatsApp
    function redirectToWhatsApp(productName) {
        const phoneNumber = "+573219943910";
        const message = `Hola, quiero saber el precio de este sombrero: ${productName}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    }

    videos.forEach((video) => {
        const item = document.createElement("div");
        item.className = "item";

        // Video embed
        const iframe = document.createElement("iframe");
        iframe.src = video.videoUrl;
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        item.appendChild(iframe);

        // Overlay con título y botón
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h3");
        title.textContent = video.title;
        overlay.appendChild(title);

        const button = document.createElement("button");
        button.textContent = "Cotizar";
        button.className = "quote-button";
        button.addEventListener("click", () => redirectToWhatsApp(video.title)); // Redirección a WhatsApp
        overlay.appendChild(button);

        item.appendChild(overlay);
        gallery.appendChild(item);
    });
});
