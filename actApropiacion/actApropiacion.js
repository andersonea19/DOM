const areaDelTexto = document.querySelector("#texto");
const botonEnviar = document.querySelector(".enviar");
const contenedorMensajes = document.querySelector(".mostrarMensajes")

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const mensaje = areaDelTexto.value;

    let tieneTexto = false;

    for (let i = 0; i < mensaje.length; i++) {
        if (mensaje[i] !== " ") {
            tieneTextoReal = true;
            break; 
        }
    }

    if (tieneTexto === false) {
        alert("el mensaje debe contener información")
    } else {
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;

        contenedorMensajes.appendChild(nuevoMensaje)

        areaDelTexto.value = "";
    }
})