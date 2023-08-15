HamburguerMenuAddEventListeners();
CartMenuAddEventListeners();


// MENÚ HAMBURGUESA

function HamburguerMenuAddEventListeners() {
    var botonMenuAbrir = document.getElementById("boton-menu-abrir");
    var botonMenuCerrar = document.getElementById("boton-menu-cerrar");
    var menu = document.getElementById("nav");
    var fondomenu = document.getElementById("fondo-menu-desplegable");
    
    botonMenuAbrir.addEventListener("click", function () {
      menu.classList.add("abierto");
      fondomenu.classList.add("abierto");
      botonMenuAbrir.style.display = "none";
      botonMenuCerrar.style.display = "flex";
    });

    botonMenuCerrar.addEventListener("click", function () {
      menu.classList.remove("abierto");
      fondomenu.classList.remove("abierto");
      botonMenuCerrar.style.display = "none";
      botonMenuAbrir.style.display = "block";
    });

  }
  
  // Esperar a que los elementos existan en el DOM para añadir los eventos
  window.addEventListener("load", function() {
    addEventListeners();
  });

// TERMINA MENÚ HAMBURGUESA

// FORMULARIO DE CONTACTO

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Enviar el formulario aquí (puede ser mediante AJAX o cualquier método que prefieras)
    // Mostrar el mensaje de éxito
    document.getElementById('success-msg').style.display = 'block';
    document.getElementById('success-msg').textContent = 'Enviado!';
  });

// TERMINA FORMULARIO DE CONTACTO
 
// EMPIEZA FUNCION PARA CARRITO DE COMPRAS, VENTANA FLOTANTE CON CARRITO Y PRODUCTOS


function CartMenuAddEventListeners() {
  var botonMenuCarritoAbrir = document.getElementById("boton-menu-carrito");
  var cartContent = document.getElementById("cart-container");

  botonMenuCarritoAbrir.addEventListener("click", function () {
    // Cambiar la visibilidad del contenido del carrito
    if (cartContent.style.display === "none" || cartContent.style.display === "") {
      cartContent.style.display = "block";
    } else {
      cartContent.style.display = "none";
    }

    // Cambiar la visibilidad del botón "Vaciar Carrito"
    var resetCartButton = document.getElementById("reset-cart");
    if (resetCartButton.style.display === "none" || resetCartButton.style.display === "") {
      resetCartButton.style.display = "block";
    } else {
      resetCartButton.style.display = "none";
    }
  });
}

// Esperar a que los elementos existan en el DOM para añadir los eventos
window.addEventListener("load", function() {
  addEventListeners();
});

// Codigo de arrays de productos para sumar al carrito 

