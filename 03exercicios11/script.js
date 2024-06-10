let ipSalario = document.querySelector('#ipSalario');
let btCalcular = document.querySelector('#btCalcular');
let slInicial = document.querySelector('#slInicial');
let slAumento = document.querySelector('#slAumento');
let slDesconto = document.querySelector('#slDesconto');

function calcular(){
    let salario = Number(ipSalario.value);
    let aumento = (salario * 15/100) + salario;
    let desconto = aumento - (aumento * 8/100) ;

    slInicial.textContent = salario;
    slAumento.textContent = aumento;
    slDesconto.textContent = desconto;
}

btCalcular.onclick = function(){
    calcular();
}
