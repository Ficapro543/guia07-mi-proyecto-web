function saludar() {

    // Obtener el valor del input
    let nombre = document.getElementById("nombre").value;

    // Validar si el usuario escribió algo
    if (nombre === "") {

        document.getElementById("resultado").innerText =
        "Por favor, ingresa tu nombre.";

    } else {

        document.getElementById("resultado").innerText =
        "Hola " + nombre + ", bienvenido al sistema.";

        // Limpiar input después del saludo
        document.getElementById("nombre").value = "";
    }
}

function validarCorreo() {

    let correo = document.getElementById("correo").value;

    if (correo === "") {

        document.getElementById("mensajeCorreo").innerText =
        "Debe ingresar un correo.";

    } else if (!correo.includes("@") || !correo.includes(".")) {

        document.getElementById("mensajeCorreo").innerText =
        "Correo no válido.";

    } else {

        document.getElementById("mensajeCorreo").innerText =
        "Correo registrado correctamente.";

        document.getElementById("correo").value = "";
    }
}