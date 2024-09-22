
function cargarDatos(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var email = document.getElementById("txtEmail").value;
    var mensaje = document.getElementById("txtArea").value;
    var error = document.getElementById("error");
    if(nombre === "" || apellido === "" || email ==="" || mensaje ==="")
    {
        error.textContent = "Debe completar todos los campos para enviar un mensaje";
        return;
    }
    error.textContent ="";

    alert("Hola "+ nombre +" "+ apellido + " El mensaje se envio correctamente");
    limpiarCampos();
}
function limpiarCampos(){
    document.getElementById("txtNombre").value ="";
    document.getElementById("txtApellido").value ="";
    document.getElementById("txtEmail").value ="";
    document.getElementById("txtArea").value ="";
}
