//Exercício 1
//Escreva um algoritmo que: Pergunte o nome de uma pessoa; Pergunte qual sobrenome da pessoa; Mostre o nome completo na tela.

let nome = prompt("Digite o seu nome:");
let sobrenome = prompt("Digite o seu sobrenome:");
console.log(`O seu nome completo é ${nome} ${sobrenome}`);

// Exercicio 2
//Escreva um algoritmo que leia dois valores numéricos e depois mostre a diferença entre eles (o primeiro menos o segundo).
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
let diferenca = numero1 - numero2;
console.log("A diferença dos dois números é:", diferenca);

//Exercício 3
//Criar um algoritmo calculadora (soma, subtração, divisão, multiplicação)
//- um calculadora utilizando if e else
//- Outra calculadora utilizando switch/case
numero1 = parseInt(prompt("Digite o primeiro valor:"));
numero2 = parseInt(prompt("Digite o segundo valor:"));
console.log("Para realizar soma digite 1");
console.log("Para realizar subitração digite 2");
console.log("Para realizar multiplicação digite 3");
console.log("Para realizar divisão digite 4");
operacao = parseInt(prompt("Digite o número correspondente a operação que você deseja fazer:"));
let resultado;
let nomeOpe;
if(operacao === 1) {
    resultado = numero1 + numero2
    nomeOpe = "Soma"
} else if (operacao === 2) {
    resultado = numero1 - numero2
    nomeOpe = "Subitração"
} else if (operacao === 3) {
    resultado = numero1*numero2
    nomeOpe = "Multiplicação"
} else {
    resultado = numero1/numero2
    nomeOpe = "Divisão"
};
console.log(`O resultado da sua operação de ${nomeOpe} é ${resultado}`);

numero1 = parseInt(prompt("Digite o primeiro valor:"));
numero2 = parseInt(prompt("Digite o segundo valor:"));
console.log("Para realizar soma digite 1");
console.log("Para realizar subitração digite 2");
console.log("Para realizar multiplicação digite 3");
console.log("Para realizar divisão digite 4");
operacao = parseInt(prompt("Digite o número correspondente a operação que você deseja fazer:"));
let resultado;
let nomeOpe;
switch (operacao){
    case 1:
    resultado = numero1 + numero2;
    nomeOpe = "Soma";
    break;
    
    case 2:
    resultado = numero1 - numero2;
    nomeOpe = "Subtração";
    break;
    
    case 3:
    resultado = numero1 * numero2;
    nomeOpe = "Multiplicação";
    break;
    
    case 4:
    resultado = numero1 / numero2;
    nomeOpe = "Divisão";
    break;

}

console.log(`O resultado da sua operação de ${nomeOpe} é ${resultado}`);

//Exercício 4
//O sistema de avaliação de determinada disciplina é composto por três provas. A primeira prova tem peso 2, a segunda tem peso 3 e a terceira tem peso 5. Elabore um algoritmo que calcule a média final de um aluno desta disciplina. Dica: Neste caso você irá usar uma Média Aritmética Ponderada. Caso tenha dúvidas sobre esse tipo de cálculo, recomendo assistir a esse vídeo: Média Ponderada – Como calcular
let nota1 = parseInt(prompt("Digite a nota da sua primeira prova:"));
let nota2 = parseInt(prompt("Digite a nota da sua segunda prova:"));
let nota3 = parseInt(prompt("Digite a nota da sua terceira prova:"));
let media = (nota1*2+nota2*3+nota3*5)/10;
console.log("A sua média é", media);

//Exercício 5
//Crie um programa no qual o usuário deverá inserir os valores da altura, largura e profundidade de uma caixa d’água, em cm. No final, exiba o volume dessa caixa d’água. Dica: Volume = Altura x Largura x Profundidade
let altura = parseInt(prompt("Digite a altura em centímetros: "));
let largura = parseInt(prompt("Digite a largura em centímetros:"));
let profundidade = parseInt(prompt("Digite a profundidade em centímetros:"));
let volume = altura*largura*profundidade;
console.log(`O volume do objeto é ${volume} cm³`);

//Exercício 6
//Crie um programa que peça para o usuário informar os valores da base e da altura de um triângulo, em centímetros,, e então mostre na tela o valor da área desse triângulo. Dica: Área do triângulo = Base x Altura / 2
let altura = parseInt(prompt("Digite a altura do tirângulo em centímetros: "));
let base = parseInt(prompt("Digite a base do triângulo em centímetros:"));
let area = (altura*base)/2;
console.log(`A área do triângulo é ${area} cm²`);

//Exercício 7
//Crie um algoritmo que informe um número e apresente se é impar ou par.
let numero = parseInt(prompt("Digite um número: "));
if(numero % 2 === 0){
    console.log("Seu número é par!")
} else {
    console.log("Seu número é ímpar!")
};

//Exercício 8
//Crie um algoritmo que calcule o IMC. Pergunte o nome, idade, altura e peso

let nome = prompt("Digite o seu nome:");
let idade = prompt("Digite a sua idade:");
let altura = parseInt(prompt("Digite a sua altura:"));
let peso = parseInt(prompt("Digite o seu peso:"));
let imc = peso/(altura**2);

if (imc<18,5) {
    console.log(`O seu IMC é ${imc}, você estar com magreza`);
} else if (imc>25){
    console.log(`O seu IMC é ${imc}, você estar com sobrepeso`);
} else if (imc>30) {
     console.log(`O seu IMC é ${imc}, você estar com obesidade`);
} else if (imc>40) {
     console.log(`O seu IMC é ${imc}, você estar com obesidade grave`);
} else {
     console.log(`O seu IMC é ${imc}, você estar normal`);
