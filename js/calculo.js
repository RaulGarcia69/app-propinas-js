function calculo() {
    cuenta = document.getElementById("cuenta").value;
    servicio = document.getElementById("servicio").value;
    personas = document.getElementById("personas").value;
    resultado = cuenta * servicio / personas;

    if (cuenta = document.getElementById("cuenta").value <= 0) {

    } else {
        if (document.getElementById("propina")) {
            document.getElementById("propina").remove()
        }
        var nuevoElemento = "<h2 id='propina'>Propina = " + resultado + " por persona</h2>";
        var form = document.getElementById("formulario");
        form.innerHTML = form.innerHTML + nuevoElemento;
    }



}