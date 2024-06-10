let ipQuilos = document.querySelector('#ipQuilos');
let btPagar = document.querySelector('#btPagar');
let pagar = document.querySelector('#pagar');

function calcularPeso(){
    let quilos = Number(ipQuilos.value);
    let total = quilos * 12;
    pagar.textContent = 'O valor total à pagar é de ' + total + ' reais.';
}

btPagar.onclick = function(){
    calcularPeso();
}