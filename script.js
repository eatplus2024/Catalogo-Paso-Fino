// Función para redirigir a WhatsApp con mensaje automático
function redirectToWhatsApp(productName) {
    const phoneNumber = "+573219943910";
    const message = `Hola, quiero saber el precio de este sombrero: ${productName}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}

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
        button.onclick = () => redirectToWhatsApp(video.title);
        item.appendChild(button);

        // Video embed
        const iframe = document.createElement("iframe");
        iframe.src = video.videoUrl;
        iframe.allowFullscreen = true;
        item.appendChild(iframe);

        gallery.appendChild(item);
    });
});
