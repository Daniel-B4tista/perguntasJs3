let ipDia = document.querySelector('#ipDia');
let ipMes = document.querySelector('#ipMes');
let btCalcular = document.querySelector('#btCalcular');

function calcularDias(){
    let dias = Number(ipDia.value);
    let mes = Number(ipMes.value);
    let calculo = (mes * 30) + dias;
    alert('Já se passaram ' + calculo + ' dias desde o inicio do ano!')
}

btCalcular.onclick = function(){
    calcularDias();
}