document.addEventListener("DOMContentLoaded", () => {

const sideMenu = document.getElementById('sideMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('menuOverlay');

function abrirMenu() {
  if (sideMenu) sideMenu.classList.add('open');
  if (overlay) overlay.classList.add('show');
}

function cerrarMenu() {
  if (sideMenu) sideMenu.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

if (openMenu) openMenu.addEventListener('click', abrirMenu);
if (closeMenu) closeMenu.addEventListener('click', cerrarMenu);
if (overlay) overlay.addEventListener('click', cerrarMenu);

const form = document.getElementById('donationForm');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const tipoDonacion = document.getElementById('tipoDonacion');
const monto = document.getElementById('monto');
const mensaje = document.getElementById('mensaje');
const formMessage = document.getElementById('formMessage');

const expresiones = {
  nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{3,60}$/,
  correo: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  telefono: /^\d{4}-?\d{4}$/,
  monto: /^.{2,80}$/,
  mensaje: /^.{10,300}$/
};

function mostrarError(input, mensajeError) {
  const error = document.getElementById('error-' + input.id);
  input.classList.add('input-error');
  input.classList.remove('input-success');
  if (error) error.textContent = mensajeError;
}

function limpiarError(input) {
  const error = document.getElementById('error-' + input.id);
  input.classList.remove('input-error');
  input.classList.add('input-success');
  if (error) error.textContent = '';
}

function validarNombre() {
  const valor = nombre.value.trim();
  if (valor === '') {
    mostrarError(nombre, 'El nombre es obligatorio.');
    return false;
  }
  if (!expresiones.nombre.test(valor)) {
    mostrarError(nombre, 'Solo letras y espacios. Mínimo 3 caracteres.');
    return false;
  }
  limpiarError(nombre);
  return true;
}

function validarCorreo() {
  const valor = correo.value.trim();
  if (valor === '') {
    mostrarError(correo, 'El correo es obligatorio.');
    return false;
  }
  if (!expresiones.correo.test(valor)) {
    mostrarError(correo, 'Ingresa un correo válido.');
    return false;
  }
  limpiarError(correo);
  return true;
}

function validarTelefono() {
  const valor = telefono.value.trim();
  if (valor === '') {
    mostrarError(telefono, 'El teléfono es obligatorio.');
    return false;
  }
  if (!expresiones.telefono.test(valor)) {
    mostrarError(telefono, 'Ejemplo: 1234-5678');
    return false;
  }
  limpiarError(telefono);
  return true;
}

function validarTipoDonacion() {
  if (tipoDonacion.value === '') {
    mostrarError(tipoDonacion, 'Debes seleccionar un tipo de donación.');
    return false;
  }
  limpiarError(tipoDonacion);
  return true;
}

function validarMonto() {
  const valor = monto.value.trim();
  if (valor === '') {
    mostrarError(monto, 'Este campo es obligatorio.');
    return false;
  }
  if (!expresiones.monto.test(valor)) {
    mostrarError(monto, 'Ingresa un monto o detalle válido.');
    return false;
  }
  limpiarError(monto);
  return true;
}

function validarMensaje() {
  const valor = mensaje.value.trim();
  if (valor === '') {
    mostrarError(mensaje, 'El mensaje es obligatorio.');
    return false;
  }
  if (!expresiones.mensaje.test(valor)) {
    mostrarError(mensaje, 'El mensaje debe tener entre 10 y 300 caracteres.');
    return false;
  }
  limpiarError(mensaje);
  return true;
}

if (nombre) nombre.addEventListener('input', validarNombre);
if (correo) correo.addEventListener('input', validarCorreo);
if (telefono) telefono.addEventListener('input', validarTelefono);
if (tipoDonacion) tipoDonacion.addEventListener('change', validarTipoDonacion);
if (monto) monto.addEventListener('input', validarMonto);
if (mensaje) mensaje.addEventListener('input', validarMensaje);

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const telefonoValido = validarTelefono();
    const tipoValido = validarTipoDonacion();
    const montoValido = validarMonto();
    const mensajeValido = validarMensaje();

    if (!nombreValido || !correoValido || !telefonoValido || !tipoValido || !montoValido || !mensajeValido) {
      if (formMessage) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Corrige los campos marcados antes de enviar el formulario.';
      }
      return;
    }

    if (formMessage) {
      formMessage.className = 'form-message success';
      formMessage.textContent = 'Formulario enviado correctamente.';
    }

    form.reset();

    [nombre, correo, telefono, tipoDonacion, monto, mensaje].forEach(input => {
      if (input) {
        input.classList.remove('input-success', 'input-error');
        const err = document.getElementById('error-' + input.id);
        if (err) err.textContent = '';
      }
    });
  });
}

});