const mensagem = document.querySelector('.mensagem');
const container = document.querySelector('.container__mensagem')

function meuEscopo() {
    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        calculaIMC();
    }

    form.addEventListener('submit', recebeEventoForm);

}


meuEscopo();

function calculaIMC() {
    let peso = document.querySelector('.peso');
    let altura = document.querySelector('.altura');

    if (altura.value === '') {
        container.style.cssText = 'background: rgb(240, 89, 59)';
        mensagem.innerHTML = `Altura inválida`;
    } else if (peso.value === '') {
        container.style.cssText = 'background: rgb(240, 89, 59)';
        mensagem.innerHTML = `Peso inválido`;
    } else {
        peso = Number(peso.value);
        altura = Number(altura.value);
        let resultado = peso / (altura * altura);
        resultado = Number(resultado.toFixed(2));
        verificaResultado(resultado);
    }
}

function verificaResultado(imc) {
    if (imc < 18.5) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.99) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Peso normal)`;
    } else if (imc >= 25 && imc <= 29.99) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.99) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.99) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Obesidade grau 2)`;
    } else if (imc > 40) {
        container.style.cssText = 'background-color: rgb(0, 252, 38)';
        mensagem.innerHTML = `Seu IMC é ${imc}(Obesidade grau 3)`;
    }
}