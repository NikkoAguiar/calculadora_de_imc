$(document).ready(function(){
    let peso, altura, imc;
    $('#altura').mask('0.00', {
        placeholder: 'Exemplo: 1.75'
    });

    $('#peso').mask('000', {
        placeholder: 'Exemplo: 80'
    });

    $('button[name=enviar]').click(function(e){
        e.preventDefault();
        peso = $('input[name=peso]').val();
        altura = $('input[name=altura]').val();

        imc = peso / (altura * altura);

        if(imc < 17){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está muito abaixo do peso ideal ☠.</p>`).appendTo('p[name=texto]');
        }else if(imc > 17 && imc < 18.49){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está abaixo do peso ideal 💀.</p>`).appendTo('p[name=texto]');
        }else if(imc > 18.49 && imc < 24.99){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está com o peso ideal 💪.</p>`).appendTo('p[name=texto]');
        }else if(imc > 24.99 && imc < 29.99){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está acima do peso 🤰.</p>`).appendTo('p[name=texto]');
        }else if(imc > 29.99 && imc < 34.99){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está no primeiro nível de obesidade 🍔.</p>`).appendTo('p[name=texto]');
        }else if(imc > 34.99 && imc < 39.99){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está no segundo nível de obesidade 🍔🍔.</p>`).appendTo('p[name=texto]');
        }else if(imc > 40){
            $('p[name=texto]').empty();
            $(`<p>Seu IMC é de ${imc.toFixed(2)}, significa que você está no segundo nível de obesidade 🍔🍔🍔.</p>`).appendTo('p[name=texto]');
        }else{
            $('p[name=texto]').empty();
            $(`<p>Por favor, preencha os campos.</p>`).appendTo('p[name=texto]');
        }
    })

    $('button[name=limpar]').click(function(){
        $('p[name=texto]').empty();
    })
})