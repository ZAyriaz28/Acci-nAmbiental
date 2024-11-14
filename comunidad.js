document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("voluntariado-form");

    // Comprobamos que el navegador soporte notificaciones
    if ("Notification" in window) {
        console.log("El navegador soporta notificaciones.");
        
        // Si ya tenemos permisos, no preguntamos de nuevo
        if (Notification.permission === "default") {
            // Solicitar permiso al usuario para mostrar notificaciones
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Permiso otorgado para mostrar notificaciones.");
                }
            });
        }
    } else {
        console.log("Este navegador no soporta notificaciones.");
    }

    // Evento cuando el formulario es enviado
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        
        // Verificar si el permiso ha sido otorgado
        if (Notification.permission === "granted") {
            // Mostrar la notificación
            new Notification("¡Ya estás participando en el voluntariado! Gracias por unirte.");
        } else {
            console.log("El usuario no ha otorgado permisos para recibir notificaciones.");
        }
    });
});
