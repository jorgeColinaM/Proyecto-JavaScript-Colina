



// FORMULARIO DE CONTACTO

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Enviar el formulario aquí (puede ser mediante AJAX o cualquier método que prefieras)
    // Mostrar el mensaje de éxito
    document.getElementById('success-msg').style.display = 'block';
    document.getElementById('success-msg').textContent = 'Enviado!';
  });

// TERMINA FORMULARIO DE CONTACTO