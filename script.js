var jogador = null;
var jogadorSelecionado = document.getElementById(elementid = 'jogador-selecionado');

mudarJogador(valor = 'X');

function escolherQuadrado(id) {
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador);
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}