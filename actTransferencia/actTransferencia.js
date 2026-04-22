const areaDelTexto = document.querySelector("#texto");
const botonEnviar = document.querySelector(".enviar");
const contenedorMensajes = document.querySelector(".mostrarMensajes")

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const mensaje = areaDelTexto.value;

    let tieneTexto;
    if (mensaje === "") {
        alert("El mensaje debe tener información");
        tieneTexto = false;
    } else {
        tieneTexto = true;
    }

    if (tieneTexto === true) {
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;

        contenedorMensajes.appendChild(nuevoMensaje)

        areaDelTexto.value = "";
    }
})