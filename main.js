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

fetch("./products.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const products = data.products;

        const addButtons = document.querySelectorAll(".add-to-cart");
        addButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                addToCart(products[index]);
            });
        });
    });

  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const resetButton = document.getElementById("reset-cart");
  const contadorProductos = document.getElementById("contador-productos");
  const loginLink = document.getElementById("loginandregister");
  const cartContainer = document.getElementById("container-cart-icon");
  const countProducts = document.getElementById("count-products");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const isUserLogged = localStorage.getItem("UserLogged");

  let cartItems;

  function initializeCart() {
    
  if(localStorage.getItem("carrito") != null && localStorage.getItem("carrito") != ""){
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

  resetButton.addEventListener("click", () => {
    resetCart();
  });

  addToCartButtons.forEach(button => (
    button.addEventListener("click", function () {
      if (isUserLogged === "true") {
        // El usuario está logueado, muestra un alerta de que el producto fue añadido al carrito
        Toastify({
          text: "El producto fue añadido al carrito",
          duration: 3000,
        }).showToast();
      } else {
        // El usuario no está logueado, muestra un alerta que debe estar logueado para comprar
        Toastify({
          text: "Debes estar logueado para comprar",
          duration: 3000,
        }).showToast();
      }
    })));
  
  if (isUserLogged === "true") {
    ShowCartButton(loginLink, cartContainer, countProducts);
  } else {
    ShowLoginLink(loginLink, cartContainer, countProducts);
  }
  function ShowCartButton(loginLink, cartContainer, countProducts){
  cartContainer.style.display = "block";
  countProducts.style.display = "flex";
  loginLink.style.display = "none";
  }
  function ShowLoginLink(loginLink, cartContainer, countProducts){
  cartContainer.style.display = "none";
  countProducts.style.display = "none";
  loginLink.style.display = "block";
  }

})}