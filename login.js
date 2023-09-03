

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

// CODIGO PARA GUARDAR EN STORAGE DATOS DEL FORM LOGIN AND REGISTER


const formularioRegister = document.querySelector("#formRegister");

formularioRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#nameInput").value;
  const mailInputRegister = document.querySelector("#mailInputRegister").value;
  const userInputRegister = document.querySelector("#userInputRegister").value;
  const passInputRegister = document.querySelector("#passInputRegister").value;

  const Users = JSON.parse(localStorage.getItem("Users")) || [];
  
  // Verificar si el usuario ya está registrado
  const isUserRegistered = Users.find((user) => user.email === mailInputRegister);

  if (isUserRegistered) {
    return Toastify({
      text: "Ya estás registrado",
      duration: 3000,
    }).showToast();
  }

  // Si el usuario no está registrado, agregarlo a la lista de usuarios
  Users.push({
    name: nameInput,
    email: mailInputRegister,
    user: userInputRegister,
    password: passInputRegister,
  });

  localStorage.setItem("Users", JSON.stringify(Users));

  Toastify({
    text: "Su registro fue exitoso, ahora inicie sesión para continuar",
    duration: 4000,
  }).showToast();
});


const formularioLogin = document.querySelector("#formLogin");

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const mailInputLogin = document.querySelector("#mailInputLogin").value;
  const passInputLogin = document.querySelector("#passInputLogin").value;

  const Users = JSON.parse(localStorage.getItem("Users")) || [];
  const validUser = Users.find(
    (user) => user.email === mailInputLogin && user.password === passInputLogin
  );

  if (!validUser) {
    return Toastify({
      text: "Usuario y/o contraseña incorrectos",
      duration: 3000,
    }).showToast();
  }
  Toastify({
    text: `Bienvenido ${validUser.name}`,
    duration: 3000,
  }).showToast();
  
  const userLoggedInEvent = new Event("userLoggedIn");
  window.dispatchEvent(userLoggedInEvent);

  localStorage.setItem("UserLogged", "true");

  window.location.href = "../index.html";
});

