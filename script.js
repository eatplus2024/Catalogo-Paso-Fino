// Detectar dispositivo móvil y enfocar automáticamente el campo de búsqueda
function autoFocusSearchInput() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const searchInput = document.getElementById("searchInput");

    if (isMobile && searchInput) {
        searchInput.focus();
    }
}

const images = [
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_f9c96ee36ee747a2a8e8da2d1ec9b0a1~mv2.png",
        keywords: ["taxi", "Taxis", "taxistas"],
        link: "https://eatcomercial01.wixsite.com/website-1/turitaxis",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_04ad6e3130d04f4dada287584d18cf01~mv2.png",
        keywords: ["muebles js", "distribuidoras", "fabrica", "alfombras", "muebles", "camas", "colchones", "espaldares", "sabanas", "tendidos", "artesanias", "toldillos", "cuadros", "sofas", "peinadores", "nocheros", "semanarios", "closets", "salas", "comedores"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-8/locales",
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

// Mostrar imágenes en la galería (coincidencias exactas y parciales)
function displayImages(filteredImages, partialMatches = []) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (filteredImages.length === 0 && partialMatches.length === 0) {
        gallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    if (filteredImages.length > 0) {
        const exactTitle = document.createElement("h3");
        exactTitle.textContent = "Resultados principales:";
        gallery.appendChild(exactTitle);

        filteredImages.forEach((image) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.target = "_blank";

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = image.keywords.join(", ");

            anchor.appendChild(img);
            gallery.appendChild(anchor);
        });
    }

    if (partialMatches.length > 0) {
        const separator = document.createElement("hr");
        gallery.appendChild(separator);

        const partialTitle = document.createElement("h3");
        partialTitle.textContent = "Coincidencias relacionadas:";
        gallery.appendChild(partialTitle);

        partialMatches.forEach(({ image, matches }) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.target = "_blank";

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = image.keywords.join(", ");

            anchor.appendChild(img);
            gallery.appendChild(anchor);

            const matchesText = document.createElement("p");
            matchesText.textContent = `Palabras relacionadas: ${matches.join(", ")}`;
            matchesText.style.fontSize = "12px";
            matchesText.style.color = "#555";
            gallery.appendChild(matchesText);
        });
    }
}

function searchImages() {
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

    const filteredImages = [];
    const partialMatches = [];

    images.forEach((image) => {
        const matches = queryWords.filter((word) =>
            image.keywords.some((keyword) => normalizeString(keyword).includes(word))
        );

        if (matches.length === queryWords.length) {
            filteredImages.push(image);
        } else if (matches.length > 0) {
            partialMatches.push({ image, matches });
        }
    });

    displayImages(filteredImages, partialMatches);
    toggleLoadingIndicator(false);
}

function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

autoFocusSearchInput();
