let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole(){
    console.log('O botão foi clicado');
}

function exibirAlerta(){
    alert('Eu amo JS');
}

function exibirPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somarDoisNumeros(){
    let num1 = prompt('Digite um número');
    let num2 = prompt('Digite outro número');

    let soma = parseInt(num1) + parseInt(num2);
    
    alert(`Resultado da soma de ${num1} e ${num2}: ${soma}`);
}