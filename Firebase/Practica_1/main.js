// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9BM6-VDJPHYFNEDFRGAPk-cvdluzHTBw",
    authDomain: "sistermasgeo.firebaseapp.com",
    projectId: "sistermasgeo",
    storageBucket: "sistermasgeo.appspot.com",
    messagingSenderId: "764288920057",
    appId: "1:764288920057:web:646779276ece1a7fd4f528"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const productosLista = document.querySelector("#lista");

const formulario = document.querySelector("#form");

const renderProductos = (doc) => {
    let tr = document.createElement("tr");
    let nombre = document.createElement("td");
    let codigo = document.createElement("td");
    let borrar = document.createElement("td");

    borrar.className = "btn far fa-trash-alt fa-lg m-2";

    nombre.textContent = doc.data().nombre;
    codigo.textContent = doc.data().codigo;

    tr.setAttribute("id", doc.id);
    tr.appendChild(nombre);
    tr.appendChild(codigo);
    tr.appendChild(borrar);

    productosLista.appendChild(tr);

    borrar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        db.collection("productos").doc(id).delete();
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    db.collection("productos").add({
        nombre: formulario.nombre.value,
        codigo: formulario.codigo.value,
    });

    formulario.nombre.value = '';
    formulario.codigo.value = '';
});

db.collection("productos").onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();

    changes.forEach((change) => {
        if (change.type == "added") {
            renderProductos(change.doc);
        } else if (change.type == "removed") {
            let valorid = document.getElementById(change.doc.id);
            productosLista.removeChild(valorid);
        }
    });
});