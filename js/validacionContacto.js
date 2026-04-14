let formulario = null;
let nombreInput = null;
let correoInput = null;
let mensajeInput = null;
let submitButton = null;

const regexIsEmpty = /^\s*$/;
const regexIsEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

document.addEventListener("DOMContentLoaded", () => {
    formulario = document.getElementById("contactForm");
    nombreInput = document.getElementById("txtNombre");
    correoInput = document.getElementById("txtCorreoElectronico");
    mensajeInput = document.getElementById("txtMsj");
    submitButton = document.getElementById("btnEnviar");

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        let objErrores = {};
        let formularioValido = true;

        document.querySelectorAll('.error-text').forEach(el => el.remove());
        [nombreInput, correoInput, mensajeInput].forEach(el => el.classList.remove('error'));

        if (!validarEspacioVacio(nombreInput.value)) {
            objErrores['txtNombreDiv'] = {
                "error": "El nombre no puede estar vacío.",
                "input": nombreInput
            }
            formularioValido = false;
        }

        if (!validarCorreoElectronico(correoInput.value)) {
            objErrores['txtCorreoDiv'] = {
                "error": "Correo electrónico no válido.",
                "input": correoInput
            }
            formularioValido = false;
        }

        if (!validarEspacioVacio(mensajeInput.value)) {
            objErrores['txtMsjDiv'] = {
                "error": "Por favor, escribe un mensaje.",
                "input": mensajeInput
            }
            formularioValido = false;
        }

        if (formularioValido) {
            formulario.submit();
        } else {
            Object.entries(objErrores).forEach(([key, obj]) => {
                obj.input.classList.add('error');
                let container = document.getElementById(key);
                
                let errorDiv = document.createElement("DIV");
                errorDiv.innerText = obj.error;
                errorDiv.classList.add('error-text');
                container.appendChild(errorDiv);
            });
        }
    });
});

function validarEspacioVacio(valor) {
    return !regexIsEmpty.test(valor);
}

function validarCorreoElectronico(valor) {
    return regexIsEmail.test(valor);
}