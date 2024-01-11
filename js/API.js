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
async function guardarCliente(url) {
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: { 'Content-Type': 'application/json' }
        });
        const resultado = await respuesta.json();

        return resultado;

    } catch (err) {
        console.log('obtenerDatos err', err.message);
    }
}

export {
    obtenerDatos,
    guardarCliente,
}