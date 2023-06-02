$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })

    // $('#telefone').mask('(00) 00000-0000');

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(51) 94002-8922'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            veiculo_interesse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome!',
            telefone: 'Por favor, informe seu telefone!',
            email: 'Por favor, informe seu E-mail!',
            veiculo_interesse: 'Por favor, informe um veículo do seu interesse!'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(e, validador){
            let camposIncorretos = validador.numbersOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })

    $('.lista_veiculos button').click(function(){
        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#formulario button').click(function(){
        alert('Formulário enviado!');
    })
})