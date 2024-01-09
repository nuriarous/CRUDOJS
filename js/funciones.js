//funciones generales que pueden servir para varios ficheros

function mostrarClientes(clientes){
    let tabla = document.getElementById("listado-clientes");
    clientes.forEach(cli => {
        tabla.innerHTML += "<tr><td>" + cli.nombre + "</td><td>" + cli.telefono + "</td><td>" + cli.empresa + "</td><td>" + cli.email + "</td></tr>";
    });
}

export{
    mostrarClientes,
}