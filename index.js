let formulario = document.getElementsByTagName('form')
console.log(formulario)
// agregar nuevo input
let inputCreado = document.createElement("input")
formulario[0].append(inputCreado)

let inputNombre = document.getElementById('nombre')
console.log(inputNombre)

let buttonEnviar = document.getElementById('button')
buttonEnviar.onclick = () =>{
    let inputNombre = document.getElementById('nombre').value
    let inputApellido = document.getElementById('apellido').value
    let inputEmpresa = document.getElementById('empresa').value
    let inputTelefono = document.getElementById('telefono').value
    let inputEmail = document.getElementById('email').value
    let inputComentario = document.getElementById('comentario').value

    let div2 = document.getElementById('div1')
    div2.innerHTML = `<h1>Muchas gracias ${inputNombre} ${inputApellido}!</h1>
                        <h2>Estaremos respondiendo tu consulta a tu correo ${inputEmail} dejandote la información para que ustedes ${inputEmpresa} puedan contactarnos. De no obtener respuesta les estaremos llamando al ${inputComentario}.`


    console.log(inputNombre,inputApellido,inputEmpresa,inputTelefono,inputEmail,inputComentario)

}