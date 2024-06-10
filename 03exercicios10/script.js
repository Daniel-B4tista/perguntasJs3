let ipDias = document.querySelector('#ipDias');
let btCalcular = document.querySelector('#btCalcular');
let resultado = document.querySelector('#resultado');

function calcular(){
    let dias = Number(ipDias.value);
    let anos = (dias / 365).toFixed(1);
    let meses = (dias / 30).toFixed(1);

    resultado.textContent = 'A quantidade de dias sem acidentes é ' + dias + ' dias.' +
    ' A quantidade de anos sem acidentes é ' + anos + ' anos.' +
    ' A quantidade de meses sem acidentes é ' + meses + ' meses.'

}

btCalcular.onclick = function(){
    calcular();
}