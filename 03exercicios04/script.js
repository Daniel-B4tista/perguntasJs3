let ipIdade = document.querySelector('#ipIdade');
let btCalcular = document.querySelector('#btCalcular');


function calcularDias(){
    let idade = Number(ipIdade.value); 
    let calculo = idade * 365;
    alert('Você já viveu '+ calculo + ' dias.')
}

btCalcular.onclick = function(){
    calcularDias();
}
