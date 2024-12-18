// Mostrar indicador de carga
function toggleLoadingIndicator(show) {
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = show ? "flex" : "none";
}

toggleLoadingIndicator(true);

// Simulación de carga y mostrar los videos del catálogo
setTimeout(() => {
    toggleLoadingIndicator(false);
}, 2000); // Simulamos que la carga dura 2 segundos
