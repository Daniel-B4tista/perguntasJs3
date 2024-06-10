let ipRaio = document.querySelector('#ipRaio');
let btCalcular = document.querySelector('#btCalcular');
let area = document.querySelector('#area');

function calcular(){
    let raio = Number(ipRaio.value);
    let calculo = 3.14 * ((raio) * (raio))

    area .textContent = 'A área da sua pizza é de ' + calculo;
}

btCalcular.onclick = function(){
    calcular();
}
