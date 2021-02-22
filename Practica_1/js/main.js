AOS.init();
function iniciaMapa() {
    var coordenadas ={
        lat : 40.45326318841044, lng : -3.688317608915776
    }
    var map = new google.maps.Map(document.getElementById('mapa'),
    {
        center : coordenadas,
        zoom: 35
    });
}