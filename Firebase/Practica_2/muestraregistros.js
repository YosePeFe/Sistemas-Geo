function muestraRegistros(doc){
            
    var registro = new Registro(doc.id,doc.data().nombre,doc.data().codigo);
        
    let tr = document.createElement("tr");
    let nombre = document.createElement("td");
    let codigo = document.createElement("td");
    let editar = document.createElement("td");
    let borrar = document.createElement("td");

    editar.id = "btneditar"
    editar.className = "btn far fa-edit fa-lg";
    editar.setAttribute("data-toggle", "modal");
    editar.setAttribute("data-target", "#ventanaeditar");

    borrar.id = "btnborrar"
    borrar.className = "btn far fa-trash-alt fa-lg";

    nombre.type = "text";
    nombre.textContent = doc.data().nombre;

    codigo.type = "text";
    codigo.textContent = doc.data().codigo;

    tr.setAttribute("id", registro.id);
    tr.appendChild(nombre);
    tr.appendChild(codigo);
    tr.appendChild(editar);
    tr.appendChild(borrar);

    productoslista.appendChild(tr);

    borrar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");             
        registro.borrar(id);
    });

    editar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");   
        registro.editar(id);
    });

}
