function iniciaMapa() {
    var propiedades = {
        center: {
            lat : 40.45326318841044, lng : -3.688317608915776
        },
        zoom: 14
    };

    const mapa = document.getElementById("map");
    const map = new google.maps.Map(mapa,propiedades);   
}