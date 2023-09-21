// session.js
var usuarioActual = null; // Almacenar el usuario actual

// Función para iniciar sesión
function iniciarSesion(usuario) {
    usuarioActual = usuario;
}

// Función para verificar la sesión actual
function verificarSesion() {
    return usuarioActual !== null;
}

// Función para obtener el usuario actual
function obtenerUsuarioActual() {
    return usuarioActual;
}
