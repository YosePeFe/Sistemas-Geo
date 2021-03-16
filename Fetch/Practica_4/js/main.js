function iniciaMapa() {
    var coordenadas = {
        lat: 0,
        lng: 0
    }

    var propiedades = {
        center: coordenadas,
        zoom: 2,
        image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  }),

        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    }

    fetch('./paises.json')
        .then(function (response) {
            response.json().then(function (datos) {
                const map = new google.maps.Map(document.getElementById('map'), propiedades);
                console.log(datos);
                datos.forEach(marcador => {
                    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
                        .then(function (respuesta) {
                            respuesta.json().then(function (datospaises) {
                                datospaises.forEach(registro => {
                                    if (registro.country == marcador.CountryName) {
                                        var informacion = "<strong>País:</strong> " + registro.country + "<br><strong>Casos:</strong> " + registro.cases + "<br><strong>Nuevos hoy:</strong> " + registro.todayCases + "<br><strong>Muertes:</strong> " + registro.deaths + "<br><strong>Muertes Hoy:</strong> " + registro.todayDeaths + "<br><strong>Recuperados:</strong> " + registro.recovered + "<br><strong>Activos:</strong> " + registro.active + "<br><strong>Críticos:</strong> " + registro.critical + "<br><strong>Casos por millón:</strong> " + registro.casesPerOneMillion;
                                        var infowindow = new google.maps.InfoWindow({
                                            content: informacion
                                        });
                                        let marker = new google.maps.Marker({
                                            map: map,
                                            position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                                            title: marcador.CountryName + registro.cases,
                                            image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",

                                        });

                                        marker.addListener('click', function () {
                                            infowindow.open(map, marker);
                                        });
                                    }
                                });
                            });
                        });
                });
            });
        })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
}