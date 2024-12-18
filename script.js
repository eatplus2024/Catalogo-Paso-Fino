// Detectar dispositivo móvil y enfocar automáticamente el campo de búsqueda
function autoFocusSearchInput() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const searchInput = document.getElementById("searchInput");

    if (isMobile && searchInput) {
        searchInput.focus();
    }
}

const items = [
    {
        id: 1,
        videoUrl: "https://www.example.com/video-sombrero-1.mp4", // Reemplaza con el enlace del video
        title: "Sombrero Veguero",
        description: "Sombrero tradicional del llano, ideal para todas las ocasiones.",
        link: "https://eatcomercial01.wixsite.com/website-1/sombrero-veguero",
    },
    {
        id: 2,
        videoUrl: "https://www.example.com/video-sombrero-2.mp4", // Reemplaza con el enlace del video
        title: "Sombrero Llanero",
        description: "Elegante sombrero de ala ancha, perfecto para el campo.",
        link: "https://eatcomercial01.wixsite.com/website-1/sombrero-llanero",
    },
];

const stopWords = [
    "a", "de", "para", "el", "la", "los", "las", "y", "o", "en", "con", "un", "una", "del", "al", "por"
];

// Normalizar cadenas para ignorar mayúsculas, tildes y diacríticos
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function toggleLoadingIndicator(show) {
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = show ? "flex" : "none";
}

// Mostrar artículos en el catálogo
function displayItems(filteredItems, partialMatches = []) {
    const catalogGallery = document.getElementById("catalog-gallery");
    catalogGallery.innerHTML = "";

    if (filteredItems.length === 0 && partialMatches.length === 0) {
        catalogGallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    if (filteredItems.length > 0) {
        filteredItems.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const video = document.createElement("video");
            video.src = item.videoUrl;
            video.controls = true;
            video.alt = item.title;

            const info = document.createElement("div");
            info.classList.add("info");
            info.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Ver más</a>
            `;

            itemDiv.appendChild(video);
            itemDiv.appendChild(info);
            catalogGallery.appendChild(itemDiv);
        });
    }

    if (partialMatches.length > 0) {
        const separator = document.createElement("hr");
        catalogGallery.appendChild(separator);

        partialMatches.forEach(({ item, matches }) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const video = document.createElement("video");
            video.src = item.videoUrl;
            video.controls = true;
            video.alt = item.title;

            const info = document.createElement("div");
            info.classList.add("info");
            info.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Ver más</a>
            `;

            itemDiv.appendChild(video);
            itemDiv.appendChild(info);
            catalogGallery.appendChild(itemDiv);

            const matchesText = document.createElement("p");
            matchesText.textContent = `Palabras relacionadas: ${matches.join(", ")}`;
            matchesText.style.fontSize = "12px";
            matchesText.style.color = "#555";
            catalogGallery.appendChild(matchesText);
        });
    }
}

function searchItems() {
    const query = normalizeString(document.getElementById("searchInput").value.trim());
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    const queryWords = query
        .split(" ")
        .filter((word) => word && !stopWords.includes(word)); // Excluir palabras comunes

    if (queryWords.length === 0) {
        alert("Por favor, usa palabras clave más específicas.");
        return;
    }

    toggleLoadingIndicator(true);

    const filteredItems = [];
    const partialMatches = [];

    items.forEach((item) => {
        const matches = queryWords.filter((word) =>
            item.title.toLowerCase().includes(word)
        );

        if (matches.length === queryWords.length) {
            filteredItems.push(item);
        } else if (matches.length > 0) {
            partialMatches.push({ item, matches });
        }
    });

    displayItems(filteredItems, partialMatches);
    toggleLoadingIndicator(false);
}

function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayItems(items);
}

autoFocusSearchInput();
