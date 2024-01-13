import { guardarCliente, editarClienteApi, borrarClienteApi } from "./API.js";

//funciones generales que pueden servir para varios ficheros
let avisoMostrado = false;

function mostrarClientes(clientes) {
    let tabla = document.getElementById("listado-clientes");
    clientes.forEach(cli => {
        tabla.innerHTML += "<tr class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'><td>" + cli.nombre + "</td><td>" + cli.telefono + "</td><td>" + cli.empresa + "</td>" + '<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5"><a href="editar-cliente.html?id=' + cli['id'] + '" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a><a href="index.html?id=' + cli['id'] + '" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a></td>';
    });
}

function comprobarDatos() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let empresa = document.getElementById('empresa').value;

    let nombreOk = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    if (!nombre.match(nombreOk)) {
        alert('El nombre debe tener un formato correcto');
        return false;
    }
    let telefonoOk = /^\d{9}$/;
    if (!telefono.match(telefonoOk)) {
        alert('El telefono debe tener un formato correcto');
        return false;
    }
    let emailOk = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (!email.match(emailOk)) {
        alert('El email debe tener un formato correcto');
        return false;
    }
    let empresaOk = /^[A-Za-z0-9\s]+$/g;
    if (!empresa.match(empresaOk)) {
        alert('El campo empresa debe tener caracteres válidos');
        return false;
    }

    if (nombre == "" || email == "" || telefono == "" || empresa == "") {
        if (avisoMostrado == false) {
            let aviso = document.createElement('div');
            let texto = document.createElement('p');
            aviso.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
                'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
            texto.innerHTML = '<strong>Error!</strong> Todos los campos son obligatorios';
            aviso.appendChild(texto);
            formulario.appendChild(aviso);

            avisoMostrado = true;

            setTimeout(function () {
                formulario.removeChild(aviso);
                avisoMostrado = false;
            }, 5000);
        }
        return false;
    } else {
        const cliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa
        }
        return cliente;
    }

}

async function nuevoCliente() {
    let comprobado = comprobarDatos();

    if (comprobado != false) {
        let resultado = await guardarCliente(comprobado);
    }
}

async function editarCliente(id) {
    let comprobado = comprobarDatos();

    if (comprobado != false) {
        let resultado = await editarClienteApi(comprobado, id);
    }
}

async function borrarCliente(id) {
    await borrarClienteApi(id);
}

export {
    mostrarClientes,
    nuevoCliente,
    editarCliente,
    borrarCliente
}