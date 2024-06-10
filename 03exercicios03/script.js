let ipPao = document.querySelector('#ipPao');
let ipBroa = document.querySelector('#ipBroa');
let arrecadado = document.querySelector('#arrecadado');
let guardar = document.querySelector('#guardar');
let btAcao = document.querySelector('#btAcao');


function calculo(){
    let pao = Number(ipPao.value);
    let broa = Number(ipBroa.value);
    let clPao = pao * 0.12;
    let clBroa = broa * 1.5;
    let ttArrecadado = clPao + clBroa;
    arrecadado.textContent = 'O total arrecadado foi ' + ttArrecadado + ' reais';
    let poupança = ttArrecadado * (10/100);
    guardar.textContent = 'Deve ser guardado ' + poupança + ' reais na sua poupança';
}

btAcao.onclick = function(){
    calculo();
}
