// Función para abrir un modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Desactivar desplazamiento
    }
}

// Función para cerrar un modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restaurar desplazamiento
    }
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
});

// Cerrar el modal si se presiona la tecla Escape
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const openModal = document.querySelector('.modal[aria-hidden="false"]');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
});

// Manejar el envío del formulario de incidencia
document.getElementById('incidencia-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener el contenedor del mensaje y mostrarlo
    const messageContainer = document.getElementById('message');
    if (messageContainer) {
        messageContainer.innerText = '¡Su incidencia ha sido enviada con éxito!';
        messageContainer.style.display = 'block';
    }

    // Limpiar el formulario
    this.reset();
});
