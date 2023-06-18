const form = document.querySelector('form');

//Almacenamos en variables los elementos de entrada de texto por su atributo 'name' (En el HTML los puse en mayúsculas para no equivocarme)
const nombreInput = document.querySelector('input[name="nombre"]');
const apellido1Input = document.querySelector('input[name="apellido1"]');
const apellido2Input = document.querySelector('input[name="apellido2"]');
const emailInput = document.querySelector('input[name="email"]');
const loginInput = document.querySelector('input[name="login"]');
const passwordInput = document.querySelector('input[name="password"]');

//Añadimos un evento al formulario cuando se vaya a enviar para que no se envie por defecto y que valide todos los campos
form.addEventListener('submit', function(event) {
  event.preventDefault(); //Así conseguimos que no se envíe el formulario por defecto
  validateForm();
});

//Método que valida el formulario
function validateForm() {
  //Obtenemos todos los campos del formulario
  const nombre = nombreInput.value.trim();
  const apellido1 = apellido1Input.value.trim();
  const apellido2 = apellido2Input.value.trim();
  const email = emailInput.value.trim();
  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  //Miramos que ningún campo esté vacío
  if (nombre === '' || apellido1 === '' || apellido2 === '' || email === '' || login === '' || password === '') {
    alert('Tienes que completar todos los campos'); 
  } else {
    alert('¡El formulario ha sido enviado con éxito!'); 
    form.reset();
  }
}

//Añadimos los eventos de validación
nombreInput.addEventListener('input', validaNombre);
apellido1Input.addEventListener('input', validaApellido1);
apellido2Input.addEventListener('input', validaApellido2);
emailInput.addEventListener('input', validaEmail);
loginInput.addEventListener('input', validaLogin);
passwordInput.addEventListener('input', validaPassword);

//Función para validar el nombre
function validaNombre() {
  const nombreValido = /^[A-Za-z]+$/.test(nombreInput.value);
  const inputLine = document.querySelector('.nombre-input-line');

  //Verificamos que el campo no esté vacío
  if (nombreInput.value === '') {
    nombreError.textContent = 'Este campo es obligatorio';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else if (!nombreValido) { //Verificamos que el nombre siga la regexp (solo letras)
    nombreError.textContent = 'El formato del nombre no es válido, inténtalo de nuevo';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else {
    nombreError.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Función para validar el primer apellido
function validaApellido1() {
  const apellido1Valido = /^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(apellido1Input.value);
  const inputLine = document.querySelector('.apellido1-input-line');

  //Verificamos que el campo no esté vacío
  if (apellido1Input.value === '') {
    apellido1Error.textContent = 'Este campo es obligatorio';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else if (!apellido1Valido) {//Verificamos que el nombre siga la regexp (solo letras y vocales con tílde)
    apellido1Error.textContent = 'El formato del apellido no es válido, inténtalo de nuevo';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else {
    apellido1Error.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Función para validar el segundo apellido
function validaApellido2() {
  const apellido2Valido = /^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(apellido2Input.value);
  const inputLine = document.querySelector('.apellido2-input-line');

  //Verificamos que el campo no esté vacío
  if (apellido2Input.value === '') {
    apellido2Error.textContent = 'Este campo es obligatorio';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else if (!apellido2Valido) {//Verificamos que el nombre siga la regexp (solo letras y vocales con tílde)
    apellido2Error.textContent = 'El formato del apellido no es válido, inténtalo de nuevo';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else {
    apellido2Error.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Función para validar el correo electrónico
function validaEmail() {
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  const inputLine = document.querySelector('.email-input-line');

  //Verificamos que el campo no esté vacío
  if (emailInput.value === '') {
    emailError.textContent = 'Este campo es obligatorio';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else if (!emailValido) {//Verificamos que el nombre siga la regexp para que cumpla con el formato de un correo electrónico
    emailError.textContent = 'El formato del correo electrónico no es válido, inténtalo de nuevo';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else {
    emailError.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Función para validar el login
function validaLogin() {
  const loginInputValue = loginInput.value;
  const inputLine = document.querySelector('.login-input-line');

  //Verificamos que el campo no esté vacío
  if (loginInputValue === '') {
    loginError.textContent = 'Este campo es obligatorio';
    inputLine.classList.remove('valid');
    inputLine.classList.add('invalid');
  } else {
    loginError.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Función para validar la contraseña
function validaPassword() {
  const passValido = /^.{4,8}$/.test(passwordInput.value);
  const inputLine = document.querySelector('.pass-input-line');

  //Verificamos que el campo no esté vacío
  if (passwordInput.value === '') {
    passError.textContent = 'Este campo es obligatorio';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else if (!passValido) {//Valida que la contraseña tenga entre 4 y 8 caracteres
    passError.textContent = 'La contraseña que has introducido es incorrecta, debe tener entre 4 y 8 caracteres';
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  } else {
    passError.textContent = '';
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
}

//Añadimos un evento al formulario cuando se esté enviando para evitar errores de validación
document.getElementById('registroForm').addEventListener('submit', function (event) {
  //Hacemos que se realicen todas las validaciones de los campos del formulario antes de enviarlo
  validaNombre();
  validaApellido1();
  validaApellido2();
  validaEmail();
  validaLogin();
  validaPass();

  //Si hay algún error de validación nos da un error y evitamos el envío
  if (
    !nombreError.textContent &&
    !apellido1Error.textContent &&
    !apellido2Error.textContent &&
    !emailError.textContent &&
    !loginError.textContent &&
    !passError.textContent
  ) {
    return;
  }

  //Evitamos el envío del formulario por defecto
  event.preventDefault();
});
