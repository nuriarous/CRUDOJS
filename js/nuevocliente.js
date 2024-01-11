//todo lo relacionado con la validación y llamada a función conexión API

let formulario = document.getElementById('formulario');
let botonAgregar = formulario.querySelector('.bg-teal-600');
let avisoMostrado = false;
console.log(botonAgregar)
botonAgregar.addEventListener('click', function (e) {
    e.preventDefault();
    nuevoCliente();
})

function nuevoCliente() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let empresa = document.getElementById('empresa').value;

    if (!avisoMostrado && (nombre == "" || email == "" || telefono == "" || empresa == "")) {
        let aviso = document.createElement('div');
        let texto = document.createElement('p');
        aviso.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
            'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        texto.innerHTML = '<strong>Error!</strong> Todos los campos son obligatorios';
        aviso.appendChild(texto);
        formulario.appendChild(aviso);

        setTimeout(function () {
            formulario.removeChild(aviso);
            avisoMostrado = false;
        }, 5000);
        avisoMostrado = true;
    } else {
        nombre.textContent = "nombre: " + nombre;
        email.textContent = "email: " + email;
        telefono.textContent = "telefono: " + telefono;
        empresa.textContent = "empresa: " + empresa;
        console.log(nombre, email, telefono, empresa);
    }


}
