exibirMensagemInicial();
let listaNumEscolhidos = [];
let numeroLimite = 10;
let numSecreto = gerarNumeroAleatorio();
console.log(numSecreto);
let contadorTentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numSecreto) {
        let palavraTentativa = (contadorTentativas > 1) ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Acertou!")
        exibirTextoNaTela("p", `Você descobriu o número Secreto em ${contadorTentativas} ${palavraTentativa}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numSecreto) {
        contadorTentativas++;
        exibirTextoNaTela("p", "O número secreto é menor.");
        limparCampo();
    } else {
        contadorTentativas++;
        exibirTextoNaTela("p", "O número secreto é maior.");
        limparCampo();
    }
};


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt((Math.random() * numeroLimite + 1));

    if (listaNumEscolhidos.length == numeroLimite) {
        listaNumEscolhidos = [];
    }

    if (listaNumEscolhidos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumEscolhidos.push(numeroEscolhido);
        console.log(listaNumEscolhidos);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo () {
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    contadorTentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

