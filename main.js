const form = document.querySelector('form#form');
const campoA = document.querySelector('input#campoA');
const campoB = document.querySelector('input#campoB');
const btn = document.querySelector('input#btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msgSucesso = `VALIDADO!`
    const msgErro = `INVALIDADO! O valor do campo B é MENOR que o valor do campo A, tente Novamente...`
    const campoVazio = `Preencha todos os campos e tente novamente...`

    if (campoA.value.length == 0 || campoB.value.length == 0) {
        const containerMsgErro = document.querySelector('p#msg')
        containerMsgErro.innerHTML = campoVazio
        containerMsgErro.style.display = 'block'
        containerMsgErro.style.backgroundColor = 'rgba(255, 18, 18, 0.87)'

        campoA.value = ''
        campoB.value = ''
    } else {
        if (Number(campoB.value) > Number(campoA.value)) {
            const containerMsgSucesso = document.querySelector('p#msg')
            containerMsgSucesso.innerHTML = msgSucesso
            containerMsgSucesso.style.display = 'block'
            containerMsgSucesso.style.backgroundColor = 'rgba(0, 151, 0, 0.808)'

            campoA.value = ''
            campoB.value = ''
        } else {
            const containerMsgErro = document.querySelector('p#msg')
            containerMsgErro.innerHTML = msgErro
            containerMsgErro.style.display = 'block'
            containerMsgErro.style.backgroundColor = 'rgba(255, 18, 18, 0.87)'

            campoA.value = ''
            campoB.value = ''
        }
    }
})
