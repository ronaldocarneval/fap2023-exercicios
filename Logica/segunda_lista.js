// Construa um programa que calcule as médias aritméticas de todos os alunos de uma turma. 
// Seu programa deverá funcionar da seguinte maneira: leia o nome do aluno; leia as notas dos 
// 4 bimestres; mostre a média aritmética do aluno; pergunte se o usuário deseja continuar; se o 
// usuário desejar continuar,repita todo o processo, senão, pare.

// let comecar = true;
// while (comecar) {
//     console.log('Bem-vindo ao programa de média!');
//     console.log('Digite as notas dos quatros bimestres');

//     let media1 = parseFloat(prompt('Primeira média: '));
//     let media2 = parseFloat(prompt('Segunda média: '));
//     let media3 = parseFloat(prompt('Terceira média: '));
//     let media4 = parseFloat(prompt('Quarta média: '));

//     let resultado = (media1 + media2 + media3 + media4) / 4;
//     console.log('O resultado da sua média é', resultado)
//     console.log('Você deseja continuar?');
//     let continua = parseInt(prompt('digite 1 para NÃO'));

//     if (continua === 1) {
//         comecar = false;
//     }
// }

// Elabore um algoritmo que escreva todos os números inteiros de 1 a 100.

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// Elabore um algoritmo que escreva apenas os números pares de 1 a 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)  
//     }
    
// }

// Elabore um algoritmo que escreva apenas os números ímpares de 1 a 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)  
//     }
    
// }

// Construa um programa que repita a tarefa de ler um número inteiro, enquanto
// o número lido for maior que 1. Ao término das repetições, escreva o resultado
// da soma de todos os números lidos.


let soma;
let comecar = true;

while (comecar) {
    let numero = parseInt(prompt('Digite um númeor inteiro'))
    soma = soma + numero;
    if (numero < 1 ) {
        comecar = false;
    }
}

console.log (`O resultado da soma dos números é ${soma}`);


