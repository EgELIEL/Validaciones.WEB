
function calcular(operacion) {
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    let resultado;

    if (isNaN(v1) || isNaN(v2)) {
        resultado = 'Por favor ingrese ambos valores.';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = v1 + v2;
                break;
            case 'restar':
                resultado = v1 - v2;
                break;
            case 'multiplicar':
                resultado = v1 * v2;
                break;
            case 'dividir':
                if (v2 === 0) {
                    resultado = 'No se puede dividir por cero.';
                } else {
                    resultado = v1 / v2;
                }
                break;
            default:
                resultado = 'Operación no reconocida.';
        }
    }

    document.getElementById('res').innerText = resultado;
}

function limpiar() {
    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';
    document.getElementById('res').innerText = '';
}
