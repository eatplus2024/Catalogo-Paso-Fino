document.addEventListener("DOMContentLoaded", () => {
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

    const gallery = document.getElementById("catalog-gallery");

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

        const button = document.createElement("a");
        button.href = video.link;
        button.target = "_blank";
        button.textContent = "Ver más";
        overlay.appendChild(button);

        item.appendChild(overlay);
        gallery.appendChild(item);
    });
});
