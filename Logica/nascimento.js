let validacao = true;
while (validacao) {
    let nome = prompt("Digite seu nome:");
    let ano = parseInt(prompt("Digite o ano do seu nascimento:"));
    let idade = 2023 - ano;
    try {
        if (ano > 1922 && ano < 2021) {
            console.log(`Olá ${nome}, você têm ${idade}`);
            validacao = false;
        } else if (ano < 1922 && ano > 2021) {
            throw new Error("Ano digitado é inválido!!")
        } else {
            throw new Error("Valor digitado não é um número válido!!!")
        }
    } catch(error) {
        console.log (error);
        console.log ("Valor digitado inválido. Digite Novamente!")
    }
}