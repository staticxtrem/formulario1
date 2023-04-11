function obtenerFechaHoraActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    const fechaActual = `${dia}/${mes}/${anio}`;
    const horaActual = `${hora}:${minutos}:${segundos}`;

    return { fecha: fechaActual, hora: horaActual };
}

function actualizarFechaHora() {
    const fechaHoraActual = obtenerFechaHoraActual();

    document.getElementById('fecha').value = fechaHoraActual.fecha;
    document.getElementById('hora').value = fechaHoraActual.hora;
}

function copiar() {
    const fechaHoraActual = obtenerFechaHoraActual();
    const texto = `Fecha: ${fechaHoraActual.fecha}\nHora: ${fechaHoraActual.hora}`;
    navigator.clipboard.writeText(texto);

}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);

function copiar() {
    var fechaHora = new Date().toLocaleString();
    var elementos = document.getElementById("elementos").innerHTML;
    var titulo = document.getElementsByTagName("h1")[0].innerHTML;
    var contenido = titulo + "\n\n" + elementos + "\n\n" + fechaHora;
    var input = document.createElement("input");
    input.setAttribute("value", contenido);
    document.body.appendChild(input);
    input.select();
    document.exeCommand("copy");
    document.body.removeChild(input);
    navigator.clipboard.writeText(texto);
    alert('La información se ha copiado');
