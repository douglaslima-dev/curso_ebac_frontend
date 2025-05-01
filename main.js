$(document).ready(function(){
    const lista = []

    // menu slider do cabeçario
    $('#nav-button').click(function() {
        $('.menu').slideDown(800)
    })

    $('#cancelar').click(function() {
        $('.menu').slideUp(800)
    })
    
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        const inputTarefa = $('#nova-tarefa').val();

        lista.push(inputTarefa) // add input ao array

        $(`<li>${inputTarefa}</li>`).appendTo('.container ul') // add conteudo a lista

        $('#nova-tarefa').val('') // limpa o campo

        $(document).on('click', 'li', function () {
            $(this).toggleClass('concluido');
        }); // add uma classe para marcar como concluido
    })
})
