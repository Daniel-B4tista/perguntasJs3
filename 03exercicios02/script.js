let ipCavalos = document.querySelector('#ipCavalos');
let btCalcular = document.querySelector('#btCalcular');
let vlFinal = document.querySelector('#vlFinal');

function ferraduras(){
    let cavalos = Number(ipCavalos.value);
    let calculo = cavalos * 4;
    vlFinal.textContent = 'O valor total de ferraduras necessarias será ' + calculo;
}

btCalcular.onclick = function(){
    ferraduras();
}
