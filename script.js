// Función para redirigir a WhatsApp con mensaje automático
function redirectToWhatsApp(productName, videoUrl) {
    const phoneNumber = "+573219943910";
    const message = `${videoUrl}\nHola, quiero saber el precio de este sombrero: ${productName}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        {
            title: "Sombrero Borsalino",
            videoUrl: "https://youtu.be/UK66hPYxhuo", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/UK66hPYxhuo" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Sombrero Bullhide",
            videoUrl: "https://youtu.be/ApnRpItCjng", // Enlace para WhatsApp
            videoFrame: `iframe src="https://www.youtube.com/embed/ApnRpItCjng" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
    ];

    const gallery = document.getElementById("catalog-gallery");

    videos.forEach((video) => {
        const item = document.createElement("div");
        item.className = "video-card";

        // Título
        const title = document.createElement("h2");
        title.textContent = video.title;
        item.appendChild(title);

        // Descripción y botón
        const description = document.createElement("p");
        description.textContent = "Cotizar este sombrero";
        item.appendChild(description);

        const button = document.createElement("button");
        button.textContent = "Cotizar";
        button.onclick = () => redirectToWhatsApp(video.title, video.videoUrl);
        item.appendChild(button);

        // Video embed
        const iframeContainer = document.createElement("div");
        iframeContainer.innerHTML = video.videoFrame; // Agregamos directamente el HTML de la incrustación
        item.appendChild(iframeContainer);

        gallery.appendChild(item);
    });
});
