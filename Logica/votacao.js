/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda
 a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
 o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, 
a quantidade de votos de cada candidato, os brancos e nulos.*/

validacao = true;
while (validacao) {
    let candidatox = 0; //889
    let candidatoy = 0; //847
    let candidatoz = 0; //515
    let branco = 0;

    console.log("Bem-vindo a eleição digital!");
    console.log("candidato_X => 889, candidato_Y => 847, candidato_Z => 515");
    let voto = parseInt(prompt("Digite o número do seu candidato:"));

    try {
        if (voto === 889) {
            candidatox++;
            console.log("Você acabou de votar no candidato X!");
        } else if (voto === 847) {
            candidatoy++;
            console.log("Você acabou de votar no candidato Y!");
        } else if (voto === 515) {
            candidatoz++;
            console.log("Você acabou de votar no candidato Z!");
        } else if (voto === 0) {
            branco++;
            console.log("Você acabou de votar em Branco/Nulo!");
        } else if (isNaN(voto)) {
            throw new Error("Valor inválido, vote novamente!");
        } else {
            branco++;
            console.log("Você acabou de votar em Branco/Nulo!");
        }
    } catch (error) {
        console.log(error);
        console.log("Valor digitado inválido. Vote novamente!");
    }

    console.log("Você deseja votar novamente?")
    let queroVotar = parseInt(prompt("Digite 1 para SIM e 2 para NÃO!"));
    if (queroVotar === 2) {
        validacao = false;
        console.log("A votação foi encerrada! Segue resultado:")
        let resultado = console.log(`Cadidato X teve ${candidatox} votos, Cadidato Y teve ${candidatoy} votos, 
        Cadidato Z teve ${candidatoz} votos e tivemos ${branco} votos brancos ou nulos.  `);
    } else {
        validacao = true;
    }


}