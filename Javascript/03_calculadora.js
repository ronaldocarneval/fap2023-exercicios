let pvalor = document.getElementById("pvalor");
let svalor = document.getElementById("svalor");
let resul = document.getElementById("resultado")

let numero1 = pvalor.valiue;
let numero2 = svalor.valiue;

function soma(a, b) {
    let total = a + b;
    resul.textContent = a + " + "+ b + " = "+ total;
}

function subtracao(a, b) {
    let total = a - b;
    resul.textContent = a + " - "+ b + " = "+ total;
}

function multiplicacao(a, b) {
    let total = a * b;
    resul.textContent = a + " x "+ b + " = "+ total;
}

function divisao(a, b) {
    let total = a / b;
    resul.textContent = a + " / "+ b + " = "+ total;
}

let btSoma = document.getElementById("soma");
let btSubtracao = document.getElementById("subtracao");
let btDivisao = document.getElementById("divisao");
let btMultiplicacao = document.getElementById("multiplicacao");

btSoma.addEventListener("click", soma(numero1, numero2) );
btSubtracao.addEventListener("click", subtracao(numero1, numero2) );
btDivisao.addEventListener("click", divisao(numero1, numero2) );
btMultiplicacao.addEventListener("click", multiplicaca(numero1, numero2) );
