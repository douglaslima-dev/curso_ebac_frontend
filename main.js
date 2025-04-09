const form = document.getElementById('form-ativ')
const imgAprovado = '<img src="./image/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./image/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="res aprovado">Aprovado</span>'
const spanReprovado = '<span class="res reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima: "))

let addLinha = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
    atualizaMediaFinal()
})

function adicionarLinha() {
    const inputNomeAtividade = document.querySelector('input#nome-atividade')
    const inputNotaAtividade = document.querySelector('input#nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        addLinha += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = addLinha
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}