//Archivo que da la funcionalidad a los formularios

document.addEventListener('DOMContentLoaded', function() {
    const formWrapper = document.querySelector('.form-wrapper');   //Se captura el div .form-wrapper
    
    //Para mostrar el formulario de registro
    const registerButton = document.getElementById('register-button');  //Capturo el register-button

    //Se escucha el evento 'click' del register-button
    registerButton.addEventListener('click', () =>{
        //Se evalua como es la pantalla (tamaño)
        if (window.innerWidth <= 768) {   //Si es una pantalla chica
            formWrapper.style.transform = 'translateY(-90%)';   //El form-wrapper se va a mover en vertical
        } else {
            formWrapper.style.transform = 'translateX(-50%)';   //Sino en horizontal
        }
    }); 

    //Para mostrar el formulario de login
    const loginButton = document.getElementById('login-button');   //Se captura el login-button

    //Se escucha el evento 'click' del login-button
    loginButton.addEventListener('click', () => {
        //Se evalua como es la pantalla (tamaño)
        if (window.innerWidth <= 768) {
            formWrapper.style.transform = 'translateY(0)';
        } else {
            formWrapper.style.transform = 'translateX(0)';
        }
    });

    //Se capturan los datos del formulario de login
    const loginForm = document.querySelector('.login-form');   //Se captura el formulario de login 

    //Se escucha el evento 'submit' del boton del formulario
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();   //Evita el envio del formulario
        const loginData = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        };
        console.log(JSON.stringify(loginData, null, 2));   //Muestra los datos en JSON en la consola
        //Se vuelve a cero (vacio) el formulario
        document.getElementById('login-email').value = "";
        document.getElementById('login-password').value = "";
    });

    //Se capturan los datos del formulario de registro
    const registerForm = document.querySelector('.register-form');   //Se captura el formulario de registro

    //Se escucha el evento 'submit' del boton del formulario
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();   //Evita el envio del formulario
        const registerData = {
            email: document.getElementById('register-email').value,
            password: document.getElementById('register-password').value,
            confirmPassword: document.getElementById('register-confirm-password').value
        };
        console.log(JSON.stringify(registerData, null, 2));   //Muestra los datos en JSON en la consola
        //Se vuelve a cero (vacio) el formulario
        document.getElementById('register-email').value = "";
        document.getElementById('register-password').value = "";
        document.getElementById('register-confirm-password').value = "";
    });
});
