let numero1 = document.getElementById("pvalor");
let numero2 = document.getElementById("svalor");
let resultado = document.getElementById("Resultado")
let a, b;

function soma() {
    a = Number(numero1.value);
    b = Number(numero2.value);
    resultado.innerHTML = a + " + " + b + " = " + (a + b);
}

function subtrair() {
    a = Number(numero1.value);
    b = Number(numero2.value);
    resultado.innerHTML = a + " - " + b + " = " + (a - b);
}

function divisao() {
    a = Number(numero1.value);
    b = Number(numero2.value);
    resultado.innerHTML = a + " / " + b + " = " + (a / b);
}

function multiplicacao() {
    a = Number(numero1.value);
    b = Number(numero2.value);
    resultado.innerHTML = a + " * " + b + " = " + (a * b);
}


