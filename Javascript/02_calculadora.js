let num1 = parseInt(window.prompt("Digite a sua primeira nota:"));
let num2 = parseInt(window.prompt("Digite a sua segunda nota:"));
let num3 = parseInt(window.prompt("Digite a sua terceira nota:"));
media = (num1 + num2 + num3)/3;
document.getElementById("resultado").innerHTML = media;