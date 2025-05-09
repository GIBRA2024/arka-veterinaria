// Función genérica para enviar WhatsApp
function enviarWhatsApp(formId, camposObligatorios, numeroDestino) {
    // Obtener los valores del formulario
    const formulario = document.getElementById(formId);
    const datosFormulario = {};

    // Recopilar los datos del formulario
    Array.from(formulario.elements).forEach(element => {
        if (element.type !== "button" && element.type !== "submit") {
            datosFormulario[element.name] = element.value;
        }
    });

    // Validar que los campos obligatorios estén completos
    for (const campo of camposObligatorios) {
        if (!datosFormulario[campo]) {
            alert(`Por favor, completa el campo ${campo} antes de enviar.`);
            return;
        }
    }

    // Construir el mensaje
    let mensajeCompleto = "";
    for (const [campo, valor] of Object.entries(datosFormulario)) {
        if (valor) {
            mensajeCompleto += `${campo.charAt(0).toUpperCase() + campo.slice(1)}: ${valor}\n`;
        }
    }

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeCompleto);

    // Crear el enlace de WhatsApp
    const enlace = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${mensajeCodificado}`;

    // Redirigir al enlace
    window.open(enlace, "_blank");
}

// Función para enviar WhatsApp para Persona Natural
function enviarWhatsAppPersonaNatural() {
    const camposObligatorios = ["nombre", "tipoDocumento", "numeroDocumento", "direccion", "correo"];
    const numeroDestino = "573225725739"; // Cambia esto al número de tu negocio
    enviarWhatsApp("cotizacionForm", camposObligatorios, numeroDestino);
}

// Función para enviar WhatsApp para Persona Jurídica
function enviarWhatsAppPersonaJuridica() {
    const camposObligatorios = ["razonSocial", "numeroNit", "direccion", "correo"];
    const numeroDestino = "573225725739"; // Cambia esto al número de tu negocio
    enviarWhatsApp("cotizacionForm", camposObligatorios, numeroDestino);
}
