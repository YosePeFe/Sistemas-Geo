var paises = document.getElementById("paises");
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then( function(response){

            response.json().then( function(datos){

                datos.forEach( registro => {

                    console.log(registro.country);
                    let renglon = document.createElement("div");
                    renglon.className = "row border bg-light";
                    paises.appendChild(renglon);

                    let columna = document.createElement("div");
                    columna.className = "col-12";
                    renglon.appendChild(columna);

                    let nombre = document.createElement("p");
                    nombre.textContent = "Número de casos en " + registro.country + ": " + registro.cases
                    columna.appendChild(nombre);
                });
            });
        });