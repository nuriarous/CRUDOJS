/*EDITAR UN REGISTRO:
  Todo lo relacionado con las dos fases de la edición
*/

import{
  editarCliente
} from "./funciones.js";

const queryString = window.location.search;
const urlParameters = new URLSearchParams(queryString);
const id = urlParameters.get('id');

let formulario = document.getElementById('formulario');
if(formulario != null){
    let botonAgregar = formulario.querySelector('.bg-teal-600');
    botonAgregar.addEventListener('click', async function (e) {
        e.preventDefault();
        await editarCliente(id);
        window.location.href = "../index.html";
    })
}


