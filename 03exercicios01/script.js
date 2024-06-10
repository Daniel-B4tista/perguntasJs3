let ipLargura = document.querySelector('#ipLargura');
let ipComprimento = document.querySelector('#ipComprimento');
let btCalcular = document.querySelector('#btCalcular');
let area = document.querySelector('#area');

function calcularArea(){
    let largura = Number(ipLargura.value);
    let comprimento = Number(ipComprimento.value);
    let calcular = (largura * comprimento);
    area.textContent = 'A área do seu terreno é de ' + calcular
    + ' metros.';
}

btCalcular.onclick = function(){
    calcularArea();
}