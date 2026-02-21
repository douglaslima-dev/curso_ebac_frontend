let areaEscolha = document.getElementById("area-escolha");
let areaRes = document.getElementById("area-res");

// Imagens 
let img_jogador = [
    "images/pedra.png",
    "images/papel.png",
    "images/tesoura.png"
];

let img_pc = [
    "images/pedra-pc.png",
    "images/papel-pc.png",
    "images/tesoura-pc.png"
];

document.addEventListener("DOMContentLoaded", () => {

    // Elementos básicos 
    let frase = document.getElementById("frase");
    let jogador = document.getElementById("jogador");
    let pc = document.getElementById("pc");
    let botao = document.getElementById("botao")


});
// Indice 
let index = 0;

// Função para efeito de img
function efeitoImagem() {
    jogador.src = img_jogador[index];
    pc.src = img_pc[index];

    index++;
    if (index === 3) {
        index = 0;
    }
}

// Chamada do efeito de escolha 
let efeito = setInterval(efeitoImagem, 100);



// Função principal de seleção
function select(escolhaJogador) {
    // Esconder area opções
    areaEscolha.style.display = 'none';

    // Mostrar a area de animação 
    areaRes.style.display = 'block';

    // Começar contador em 3
    frase.textContent = '3';

    // Ativar cronometro 
    let tempo = setInterval(() => {
        let cronometro = parseInt(frase.textContent);
        cronometro--;
        frase.textContent = cronometro;

        // Parar ao chegar em zero
        if (cronometro === 0) {
            clearInterval(tempo);
            clearInterval(efeito);
        }

    }, 1000);

    // Regras do jogo
    setTimeout(() => {
        
        // Randomizar a escolha do pc
        let escolhaPC = Math.floor(Math.random() * 3);
        console.log('Escolha do PC: ' + escolhaPC);

        // Mostrar escolha do PC
        pc.src = img_pc[escolhaPC];

        // Mostrar escolha do Jogador
        jogador.src = img_jogador[escolhaJogador];

        // Verificar se foi empate
        if (escolhaJogador === escolhaPC) {
            frase.textContent = 'Empatou!';
            botao.style.display = 'block';
            return false;
        }

        // Verificar vitoria
        switch(escolhaJogador) {
            case 0: //escolheu pedra
            escolhaPC === 2 ? frase.textContent = "Jogador Venceu!" : frase.textContent = "PC Venceu!";
            botao.style.display = 'block';
            break;

            case 1: //escolheu papel
            escolhaPC === 0 ? frase.textContent = "Jogador Venceu!" : frase.textContent = "PC Venceu!";
            botao.style.display = 'block';
            break;

            case 2: //escolheu tesoura
            escolhaPC === 1 ? frase.textContent = "Jogador Venceu!" : frase.textContent = "PC Venceu!";
            botao.style.display = 'block';
            break;

            default:
                alert('Escolha inválida');
        }

    }, 3000);










}