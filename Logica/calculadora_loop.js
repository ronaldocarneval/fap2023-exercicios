let calcular = true;
while (calcular) {
console.log("Bem vindo a sua calculadora virtual!");
let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
let numero2 = parseFloat(prompt("Digite o segundo valor:"));
console.log("Digite 1 para Soma, 2 para Subtração, 3 para Multiplicação e 4 para Divisão e 0 para Sair.");
let operacao = parseInt(prompt("Qual operação você deseja fazer?"));

function calculadora(numero1, numero2, operacao) {
    if (operacao === 1 ) { 
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    } else if (operacao === 2 ) { 
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    } else if (operacao === 3 ) { 
        console.log(`${numero1} X ${numero2} = ${numero1 * numero2}`);
    } else if (operacao === 4 ) { 
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    } else if (operacao === 0 ) { 
        console.log(`Você finalizou a calculadora!`);
        calcular = false;
    } else {
        console.log("Essa opção não existe");
    }
}

console.log(calculadora(numero1, numero2, operacao));}

