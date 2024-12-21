let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let nummeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Play Of Secret Number');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    campo.innerHTML = texto;  
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == nummeroSecreto);
    if (chute == nummeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas!';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else{
        if (chute > nummeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        } 
       // tentativas = tentativas +1; 
        tentativas++;
        limparCampo();
    }
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
} 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}
function reiniciarJogo(){
    nummeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}










/*
function mostrarSaudacao (){
    console.log ('Hey, whats up?');
}
mostrarSaudacao ();

//abaixo vamos ver outra função com o FUNCTION.

function mostrarNome (nome){
    console.log (`Hey,${nome} whats up?`);
}
mostrarNome ('Lannoy');




function calcularDobro (numero){
    return numero * 2;
}
console.log(calcularDobro(4));

function calcularMedia (num1, num2, num3){
    return (num1 + num2 + num3) / 3; 
}
let media = calcularMedia (15,30,90);
console.log(media);

*/