let ipLitros = document.querySelector('#ipLitros');
let ipGasolina = document.querySelector('#ipGasolina');
let btCalcular = document.querySelector('#btCalcular');
let qtLitros = document.querySelector('#qtLitros');

function calcular(){
    let litros = Number(ipLitros.value);
    let gasolina = Number(ipGasolina.value);

    let pagamento = gasolina / litros;

    qtLitros.textContent = pagamento;
}

btCalcular.onclick = function(){
    calcular();
}