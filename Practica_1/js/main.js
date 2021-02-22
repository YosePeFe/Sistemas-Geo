    AOS.init()
    function iniciaMapa(){
        var coordenadas = {
            lat : 40.45294479353589, lng : -3.688296151137329
        } 
        var map = new google.maps.Map(document.getElementById('mapa'),
        {   
            centrar : coordenadas,
            zoom : 15
        });
    } 