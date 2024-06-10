let btDividir = document.querySelector('#btDividir');
let text = document.querySelector('#text');
let ipValor = document.querySelector('#ipValor');

let carlos 
let andre 
let felipe 
let calculo = Math.trunc(calculo.value);

function calcular(){
    let total = Number(ipValor.value);

    let calculoResto = total % 3;
    calculo = total / 3;

    carlos = calculo;
    andre = calculo;
    felipe = calculo + calculoResto;

    text.textContent = 'Uma conta de ' + total + 'reais, resulta em ' + carlos + 'reais para Carlos, '+ andre + 'reais para andre e ' + felipe + 'reais para felipe.'

}

btDividir.onclick = function(){
    calcular();
}