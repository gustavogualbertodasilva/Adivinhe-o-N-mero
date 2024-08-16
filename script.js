var dica = window.document.getElementById("dica")
var input = window.document.getElementById("input")
var numero = Math.floor(Math.random() * 100) + 1
var botao = window.document.getElementsByClassName("botao")
var pontos = 0
input.value = ""
dica.value = ("ADIVINHE O NUMERO DE 1 A 100")
botao[1].disabled = true
botao[1].style.filter = 'brightness(70%)';
window.alert(`${numero}`)

function ok() {
botao[0].style.filter = 'brightness(150%)';
setTimeout(function() {
botao[0].style.filter = 'brightness(100%)';
}, 90);
if (input.value <= 0 ||input.value >= 101){  
    dica.style.backgroundColor = "red"
    window.alert("USE UM NÚMERO ENTRE 1 E 100")
    dica.value = ("USE UM NÚMERO ENTRE 1 E 100")
}
if(input.value == numero){
    pontos += 1
    dica.value = "PARABÉNS VOCÊ ACERTOU"
    botao[0].disabled = true
    botao[1].disabled = false
    dica.style.backgroundColor = `rgb(54, 126, 40)`
    setTimeout(function() {
        botao[0].style.filter = 'brightness(70%)';
    }, 150);
    botao[1].style.filter = 'brightness(100%)';
} else {
    if (input.value >= 1 && input.value <= 100){
        if(input.value > numero){
            dica.value = ("TENTE UM NUMERO MENOR")
            dica.style.backgroundColor = `rgb(219, 78, 23)`
            }
            if(input.value < numero) {
                dica.value = ("TENTE UM NUMERO MAIOR")
                dica.style.backgroundColor = `rgb(52, 173, 137)`
            }
    }
}
}
function reset(){
    botao[1].style.filter = 'brightness(120%)';
    setTimeout(function() {
    botao[1].style.filter = 'brightness(70%)';
}, 90);
    numero = Math.floor(Math.random() * 100) + 1
    botao[1].disabled = true
    botao[0].disabled = false
    botao[0].style.filter = 'brightness(100%)';
    dica.style.backgroundColor = `rgba(63, 5, 139, 0.842)`
    dica.value = (`JOGO RESETADO  |  PONTOS: ${pontos} `)
}