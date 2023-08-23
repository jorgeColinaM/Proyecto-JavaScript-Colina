HamburguerMenuAddEventListeners();
CartMenuAddEventListeners();
AddProductAddEventListeners();

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

// TERMINA MENÚ HAMBURGUESA


 
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

// EMPIEZA CODIGO PARA FUNCIONALIDAD BOTONES DE AGREGAR PRODUCTOS Y CARRITO

function AddProductAddEventListeners() {

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { name: "Capuccino", price: 2 },
    { name: "Espresso", price: 1.5 },
    { name: "Waffles", price: 5 },
    { name: "Latte", price: 2 },
    { name: "Medialuna", price: 4 },
    { name: "Tiramisu", price: 6 },
    { name: "Capuccino frío", price: 2 },
    { name: "Carrot cake", price: 2 },
    { name: "Torta de Chocolate", price: 5 },
    { name: "Torta de chocomaní", price: 6 },
    { name: "Croissant", price: 2.5 },
    { name: "Brownie con fresas", price: 4 },
    { name: "Pancakes canela y banana", price: 3 },
    { name: "Chocolate caliente", price: 2.5 },
    { name: "Sinfonia", price: 5 },
    { name: "Pancakes con frutos", price: 4 },
    // aquí puedo agregar más productos...
];

  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const resetButton = document.getElementById("reset-cart");
  const contadorProductos = document.getElementById("contador-productos");

  let cartItems;

  function initializeCart() {
    
  if(localStorage.getItem("carrito") != null){
    cartItems = JSON.parse(localStorage.getItem("carrito"));
  }else{
    cartItems = [];
  }
  updateCart()
  }
  initializeCart();

  function updateCart() {
    cartList.innerHTML = "";
    let total = 0;
    for (const item of cartItems) {
      const li = document.createElement("li");
      li.textContent = `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`;
      cartList.appendChild(li);
      total += item.price * item.quantity;
    }
    cartTotal.textContent = `$${total.toFixed(2)}`;
    contadorProductos.textContent = cartItems.length.toString();
  }

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(cartItems));
    updateCart();
  }

  function resetCart() {
    cartItems = [];
    localStorage.setItem("carrito", cartItems);
    updateCart();
  }

  const addButtons = document.querySelectorAll(".add-to-cart");
  addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addToCart(products[index]);
    });
  });

  resetButton.addEventListener("click", () => {
    resetCart();
  });
});
}
