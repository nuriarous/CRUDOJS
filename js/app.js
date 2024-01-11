//inicia la aplicación. Puede contener alguna función complementaria
import {
  obtenerDatos,

} from "./API.js";

import {
  borrarCliente
} from "./funciones.js";

import {
  mostrarClientes,
} from "./funciones.js";

//primero mostramos los clientes por defecto que tenemos en la pagina
const url = "http://localhost:4000/clientes";
const clientes = obtenerDatos(url);



clientes.then(cli => {
  mostrarClientes(cli);
});

document.addEventListener("DOMContentLoaded", async function(){
  const queryString = window.location.search;
  const urlParameters = new URLSearchParams(queryString);
  const id = urlParameters.get('id');

  if(id != null){
    let aceptar = confirm("Desea borrar este cliente?");
    if(aceptar){
      await borrarCliente(id);
      
      window.location.href = "../index.html";
    }
  }

})

