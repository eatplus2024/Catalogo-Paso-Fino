document.addEventListener("DOMContentLoaded", () => {
    const catalogContainer = document.getElementById("catalog-container");

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
    ];

    sombreros.forEach((sombrero) => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        const title = document.createElement("h2");
        title.textContent = sombrero.title;

        const video = document.createElement("video");
        video.src = sombrero.videoSrc;
        video.controls = true;
        video.autoplay = true;

        const button = document.createElement("a");
        button.href = sombrero.whatsappLink;
        button.target = "_blank";
        button.textContent = "Cotizar";

        videoItem.appendChild(title);
        videoItem.appendChild(button);
        videoItem.appendChild(video);

        catalogContainer.appendChild(videoItem);
    });
});
