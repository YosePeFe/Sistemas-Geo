function funcion2(){
    console.log("hace aglo");
};

var paises = document.getElementById("paises");
fetch('datos.json')
.then( function(response){
    response.json().then( function(datos){
        datos.forEach( registro => {
            console.log(registro.country);
            let nombre = document.createElement("p");
            nombre.textContent = "País: " + registro.country + ", casos:" + registro.cases;
            paises.appendChild(nombre);
        });
    });
});
funcion2();