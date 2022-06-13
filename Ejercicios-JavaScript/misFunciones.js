/**
 * Conversor de unidades, de metros, pies, pulgadas y yardas
 * @method cambiarUnidades
 * @param {string} - id El id de los inputs de los metros, pies, pulgadas o yardas
 * @param {number} - valor El valor de los metros, pies, yardas o pulgadas
 * @return
 */

function cambiarUnidades(id, valor) {
    if (isNaN(valor) ) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value= "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value= 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;

    }
}


function convertirGR(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById( elementId: "grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id==radianes){
        rad = document.getElementById(elementId: "radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById(elementId: "grados").value = grad;
    document.getElementById(elementId: "radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar") {
        document.getElementById(elementId: "divMO").style.display ='block';
    }else if(valorMO=="val_ocultar") {
        document.getElementById(elementIs: "divMO").style.display ='none';
    }
}