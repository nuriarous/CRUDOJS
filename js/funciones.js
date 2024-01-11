//funciones generales que pueden servir para varios ficheros
let avisoMostrado = false;

function mostrarClientes(clientes) {
    let tabla = document.getElementById("listado-clientes");
    clientes.forEach(cli => {
        tabla.innerHTML += "<tr><td>" + cli.nombre + "</td><td>" + cli.telefono + "</td><td>" + cli.empresa + "</td><td>" + cli.email + "</td></tr>";
    });
}

function nuevoCliente() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let empresa = document.getElementById('empresa').value;

    if (nombre == "" || email == "" || telefono == "" || empresa == "") {
        if(avisoMostrado == false){
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
    } else {
        nombre = "nombre: " + nombre;
        email = "email: " + email;
        telefono = "telefono: " + telefono;
        empresa = "empresa: " + empresa;
        console.log(nombre, email, telefono, empresa);
    }


}

export {
    mostrarClientes,
    nuevoCliente
}