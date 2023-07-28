console.log("Bem vindo a sua calculadora virtual!");
let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
let numero2 = parseFloat(prompt("Digite o segundo valor:"));
console.log("Digite 1 para Soma, 2 para Subtração, 3 para Multiplicação e 4 para Divisão");
let operacao = parseInt(prompt("Qual operação você deseja fazer?"));

function calculadora(numero1, numero2, operacao) {
    switch (operacao) {
        case 1:
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
            break;
        case 2:
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
            break;
        case 3:
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`)
            break;
        case 4:
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
            break;

    }

}

console.log(calculadora(numero1, numero2, operacao));