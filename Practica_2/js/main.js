function obtieneDatos() {
    var navegador = document.getElementById("navegador");
    
    var datos = navegador.getElementsByTagName("li");

    console.warn(navegador);
    console.warn(datos);
    
    datos[0].innerHTML = "Nombre del Navegador: " + navigator.appCodeName;
    datos[1].innerHTML = "Versión del Navegador: " + navigator.appVersion;
    datos[2].innerHTML = "Estatus de Internet: " + navigator.onLine;
    datos[3].innerHTML = "Plataforma: " + navigator.platform;
}