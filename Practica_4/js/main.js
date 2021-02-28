function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        mapa.innerHTML = "El navegador no dispone de la capacidad de geolocalización"
    }
}

function showPosition(posicion) {
    var coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;
    
    console.log(coordenadas);

    var imagenurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + coordenadas + "&zoom=18&size=800x800&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24";

    var mapa=document.getElementById("mapa");

    mapa.innerHTML = "<img src="+ imagenurl + ">";
}