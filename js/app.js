//inicia la aplicación. Puede contener alguna función complementaria
import {
  obtenerDatos,

} from "./API.js";

import {
  mostrarClientes,
} from "./funciones.js";

//primero mostramos los clientes por defecto que tenemos en la pagina
const url = "http://localhost:4000/clientes";
const clientes = obtenerDatos(url);


clientes.then(cli => {
  mostrarClientes(cli);
});
