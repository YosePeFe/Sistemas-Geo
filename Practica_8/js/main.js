/* var coordenadas = {
    lat: -31.563910, lng: 147.154312
}

const queryString = window.location.search;

console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get('idioma');

document.getElementById('idioma').value = idioma;

var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3HTGbR2g2fA9AMdMoXbAIYMz2dIONoFs&callback=iniciaMapa&language=' + idioma;

document.head.appendChild(script);

function iniciaMapa(){
    var map = new google.maps.Map(
    document.getElementById('mapa'),
    {
        center: coordenadas,
        zoom: 3
    }
    );
} */