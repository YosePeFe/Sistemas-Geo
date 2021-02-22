AOS.init();
function iniciaMapa() {
    var coordenadas ={
        lat : 16.861254, lng : -99.875713
    }
    var map = new google.maps.Map(document.getElementById('mapa'),
    {
        center : coordenadas,
        zoom: 15
    });
}