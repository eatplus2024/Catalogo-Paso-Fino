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
            title: "Borsalino",
            videoUrl: "https://youtu.be/UK66hPYxhuo", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/UK66hPYxhuo" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Bullhide",
            videoUrl: "https://youtu.be/ApnRpItCjng", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/ApnRpItCjng" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Bullhide",
            videoUrl: "https://youtu.be/is0E1mT7i_k", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/is0E1mT7i_k" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Criollo",
            videoUrl: "https://youtu.be/XOj5UOzCjrI", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/XOj5UOzCjrI" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Cruchable",
            videoUrl: "https://youtu.be/msENKr81Q00", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/msENKr81Q00" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Estilo Ranchero",
            videoUrl: "https://youtu.be/Q5OYlpfdmkE", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/Q5OYlpfdmkE" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Aguadeño Ala Ancha",
            videoUrl: "https://youtu.be/FcnNC89lZMc", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/FcnNC89lZMc" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Montana",
            videoUrl: "https://youtu.be/kb28IQykA7Y", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/kb28IQykA7Y" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Montana",
            videoUrl: "https://youtu.be/2LCOcw4yFAM", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/2LCOcw4yFAM" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Montana",
            videoUrl: "https://youtu.be/Tmr9vjW5b4U", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/Tmr9vjW5b4U" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Montana",
            videoUrl: "https://youtu.be/9Ur2GL3E0Ng", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/9Ur2GL3E0Ng" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Montana",
            videoUrl: "https://youtu.be/8vzyg6634II", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/8vzyg6634II" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Denver",
            videoUrl: "https://https://youtu.be/5HSKa7WH4i0", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/5HSKa7WH4i0" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Rebelde",
            videoUrl: "https://youtu.be/nInIVF2gykQ", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/nInIVF2gykQ" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Rocha Hats Mexicano",
            videoUrl: "https://youtu.be/09bAhjiSLm4", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/09bAhjiSLm4" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Sombrero de Gamuza",
            videoUrl: "https://youtu.be/SFbqVuy9WeU", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/SFbqVuy9WeU" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Sombrero en Cuero",
            videoUrl: "https://youtu.be/ukj7KmPwg30", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/ukj7KmPwg30" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Sombrero en Cuero",
            videoUrl: "https://youtu.be/vyxvWYey5v8", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/vyxvWYey5v8" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Texas",
            videoUrl: "https://youtu.be/f_ionGn5nPY", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/f_ionGn5nPY" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
        },
        {
            title: "Topochero",
            videoUrl: "https://youtu.be/0RDOAn4cyOQ", // Enlace para WhatsApp
            videoFrame: `<iframe src="https://www.youtube.com/embed/0RDOAn4cyOQ" width="640" height="480" frameborder="0" allowfullscreen></iframe>`, // Incrustación
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
