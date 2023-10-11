let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");

function nomeCompleto () {
    n = nome.value;
    s = sobrenome.value;
    resultado1.innerHTML = n + "  " + s;

}

let n = nome.value;
let s = sobrenome.value; 

function nomeCompleto2 (nome, sobrenome) {
    resultado2.innerHTML = nome + "  " + sobrenome;

}

nomeCompleto2 (n, s);

let nomeCompleto3 = (n,s) => { resultado3.innerHTML = n + "  " + s; }