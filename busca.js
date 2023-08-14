// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código 
// em JavaScript para encontrar o valor 20. Para isso, temos que escolher entre realizar
// uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
// Codifique a solução mais eficiente para buscar o número 20 no array.

const numero = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let numroPro = 20;
function buscaLinear(array, elemento) {
    for (let i = 0; i<array.length; i++){
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}

console.log(buscaLinear(numero, 20));

function buscaBinaria(array, elemento) {
    let inicio = 0;
    let fim = array.length - 1;

    while(inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if(array[meio] === elemento) {
            return meio;

        }
        if(array[meio] > elemento) {
            fim = meio - 1;
        } else {
            inicio =  meio + 1;
        }
    }
return -1;
}

console;log(buscaBinaria(numero, 20));