//todo lo relacionado con la validación y llamada a función conexión API

import { 
    nuevoCliente
 } from "./funciones.js";


let formulario = document.getElementById('formulario');
if(formulario != null){
    let botonAgregar = formulario.querySelector('.bg-teal-600');
    botonAgregar.addEventListener('click', function (e) {
        e.preventDefault();
        nuevoCliente();
    })
}
