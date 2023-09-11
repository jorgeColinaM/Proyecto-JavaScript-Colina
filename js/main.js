HamburguerMenuAddEventListeners();
CartMenuAddEventListeners();
AddProductAddEventListeners();


// MENÚ HAMBURGUESA

function HamburguerMenuAddEventListeners() {
    const botonMenuAbrir = document.getElementById("boton-menu-abrir");
    const botonMenuCerrar = document.getElementById("boton-menu-cerrar");
    const menu = document.getElementById("nav");
    const fondomenu = document.getElementById("fondo-menu-desplegable");
    
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
  const botonMenuCarritoAbrir = document.getElementById("boton-menu-carrito");
  const cartContent = document.getElementById("cart-container");

  botonMenuCarritoAbrir.addEventListener("click", function () {
    // Cambiar la visibilidad del contenido del carrito
    if (cartContent.style.display === "none" || cartContent.style.display === "") {
      cartContent.style.display = "block";
    } else {
      cartContent.style.display = "none";
    }

    // Cambiar la visibilidad del botón "Vaciar Carrito"
    const resetCartButton = document.getElementById("reset-cart");
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
  const logoutLink = document.getElementById("logoutButton")
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const isUserLogged = localStorage.getItem("UserLogged");
  const buyButton = document.getElementById("buy-cart")

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
  buyButton.addEventListener("click", () => {
    Toastify({
      text: "Su compra ha sido exitosa",
      duration: 3000,
    }).showToast()
    resetCart();

  });

  addToCartButtons.forEach(button => (
    button.addEventListener("click", function () {
       (isUserLogged === "true")        
      // Si el usuario está logueado, muestra un alerta de que el producto fue añadido al carrito
      
       ? Toastify({
          text: "El producto fue añadido al carrito",
          duration: 3000,
        }).showToast()
      // Si el usuario no está logueado, muestra un alerta que debe estar logueado para comprar

       : Toastify({
          text: "Debes estar logueado para comprar",
          duration: 3000,
        }).showToast();
      
    })));
  
// Ocultar o desplegar boton ingresar, carrito de compras y contador de productos

 (isUserLogged === "true") 
 ? ShowCartButton(loginLink, cartContainer, countProducts, logoutLink)

 : ShowLoginLink(loginLink, cartContainer, countProducts, logoutLink);
  
  function ShowCartButton(loginLink, cartContainer, countProducts, logoutLink){
  cartContainer.style.display = "block";
  countProducts.style.display = "flex";
  logoutLink.style.display = "block";
  loginLink.style.display = "none";
  
  }
  function ShowLoginLink(loginLink, cartContainer, countProducts, logoutLink){
  cartContainer.style.display = "none";
  countProducts.style.display = "none";
  logoutLink.style.display = "none";
  loginLink.style.display = "block";
  }
  
  const logout = () => {
    localStorage.removeItem("UserLogged");
    window.location.reload();
    window.location.href = "./index.html";
  }

  const logoutButton = document.querySelector("#logoutButton");
  if (logoutButton) 
  {
    logoutButton.addEventListener("click", logout);
  }

})}

