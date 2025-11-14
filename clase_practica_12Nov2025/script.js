//Botones
const btnAgregar = document.getElementById("btnAgregar")
const btnActualizar = document.getElementById("btnActualizar")
const btnBorrar = document.getElementById("btnBorrar")
const btnMostrar = document.getElementById("btnMostrar")

let id_tarea = 0

function iniciar() {
    eventos()
}
window.addEventListener('DOMContentLoaded', iniciar)

function validarCamposVacios() {

    let datos = []

    const titulo = document.getElementById("titulo").value
    const descripcion = document.getElementById("descripcion").value
    const estado = document.getElementById("estado").value
    const fec_nacimiento = document.getElementById("fec-nacimiento").value

    if (titulo === "" || descripcion === "" || estado === "" || fec_nacimiento === "") {
        alert("Llene los datos por favor")
        return null
    }

    datos[0] = titulo
    datos[1] = descripcion
    datos[2] = estado
    datos[3] = fec_nacimiento

    return datos
}


function recopilarDatosTabla() {
    const tbody = document.querySelector("tbody")
    const filas = tbody.children

    if (filas.length === 0) {
        return null
    }

    return filas
}


function actualizarDatosTabla() {
    let filas_tabla = recopilarDatosTabla()

    if (filas_tabla == null) {
        alert("NO hay datos para actualizar")
        return
    }

    const id_fila = document.getElementById("Id_fila")

    if (!id_fila) {
        console.log("El elemento id no existe")
        return
    }

    if (id_fila.value == "" || id_fila.value == null) {
        alert("Debe de poner el ID de la fila que va a actualizar")
        return
    }

    const titulo_actulizar = document.getElementById("titulo").value
    const descripcion_actualizar = document.getElementById("descripcion").value
    const estado_actualizar = document.getElementById("estado").value
    const fec_nacimiento_actualizar = document.getElementById("fec-nacimiento").value

    let datosActualizar = []

    datosActualizar[0] = titulo_actulizar
    datosActualizar[1] = descripcion_actualizar
    datosActualizar[2] = estado_actualizar
    datosActualizar[3] = fec_nacimiento_actualizar

    let datosInsertar

    for (let x = 0; x < filas_tabla.length; x++) {
        let celdas = filas_tabla[x].children

        if (celdas[0].textContent == id_fila.value) {
            if (titulo_actulizar === "" && descripcion_actualizar === "" && estado_actualizar === "" && fec_nacimiento_actualizar === "") {
                alert("Debe de al menos llenar un campo que vaya a actualizar")
                return
            }

            datosInsertar = verificarActualizar(filas_tabla[x], datosActualizar)
            break
        } else {
            alert("La fila que usted quiere actualizar NO SE ENCUENTRA")
            return
        }
    }
}


function verificarActualizar(filas_tabla, datosActualizar){
    console.log("Entro en la funcion")
    return
}

function limpiarCampos() {
    const titulo = document.getElementById("titulo").value = ""
    const descripcion = document.getElementById("descripcion").value = ""
    const estado = document.getElementById("estado").value = ""
    const fec_nacimiento = document.getElementById("fec-nacimiento").value = ""
}

function eventos() {
    btnAgregar.addEventListener('click', () => {

        if (validarCamposVacios() == null) {
            return
        }

        const datos = validarCamposVacios()
        const fila = document.querySelector("tbody")
        const contenido_fila = document.createElement("tr")

        id_tarea++

        contenido_fila.innerHTML = `
            <td>${id_tarea}</td>
            <td>${datos[0]}</td>
            <td>${datos[1]}</td>
            <td>${datos[2]}</td>
            <td>${datos[3]}</td>
        `
        fila.appendChild(contenido_fila)
        limpiarCampos()
    })

    btnActualizar.addEventListener('click', () => {
        actualizarDatosTabla()
    })

    btnBorrar.addEventListener('click', () => {
        limpiarCampos()
    })

    btnMostrar.addEventListener('click', () => {
        recopilarDatosTabla()
    })
}