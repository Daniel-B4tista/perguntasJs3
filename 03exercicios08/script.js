let ipP = document.querySelector('#ipP');
let ipM = document.querySelector('#ipM');
let ipG = document.querySelector('#ipG');
let valor = document.querySelector('#valor');
let btCalcular = document.querySelector('#btCalcular');

function valorTotal(){
    let p = Number(ipP.value);
    let m = Number(ipM.value);
    let g = Number(ipG.value);

    let calculo = (p * 10) + (m * 12 ) + (g * 15);
    valor.textContent = calculo;
}

btCalcular.onclick = function(){
    valorTotal();
}

