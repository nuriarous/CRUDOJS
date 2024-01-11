//Acciones con la API de Json Server

async function obtenerDatos(url) {
    console.log(url);
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        return resultado;

    } catch (err) {
        console.log('obtenerDatos err', err.message);
    }
}
async function guardarCliente(cliente) {
    try {
        console.log(cliente)
        const respuesta = await fetch("http://localhost:4000/clientes", {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: { 'Content-Type': 'application/json' }
        });
        const resultado = await respuesta.json();
        window.location.href = "../index.html";
    } catch (err) {
        console.log('obtenerDatos err', err.message);
    }
}

async function editarClienteApi(cliente, id){
    try{
        const respuesta = await fetch("http://localhost:4000/clientes/"+id, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: { 'Content-Type': 'application/json' }
        });
    }catch(err){
        console.log(err);
    }
}

async function borrarClienteApi(id){
    try{
        const respuesta = await fetch("http://localhost:4000/clientes/"+id, {
            method: 'DELETE'
        });
    }catch(err){
        console.log(err);
    }
}

export {
    obtenerDatos,
    guardarCliente,
    editarClienteApi,
    borrarClienteApi
}