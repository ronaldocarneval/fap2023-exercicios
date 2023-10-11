function Banco(conta, saldo, tipo) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    saldo = function saldo() {
        console.log(this.saldo)
    }
    depositar = function depositar(x) {
        this.saldo =+ x;
    }
    saque = function saque(x) {
        this.saldo =- x;
    }
    numeroDaConta = function numeroDaConta() {
        console.log(this.conta)
    }
}


var minhaConta = new Banco( "1505", 2000, "Conta Corrente");

