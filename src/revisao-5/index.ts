import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const minhaContaCorrente = new ContaCorrente(10, "Jeff", 1000);

minhaContaCorrente.depositar(100);
minhaContaCorrente.depositar(50);
minhaContaCorrente.sacar(500);

// console.log(minhaContaCorrente);


const minhaContaPoupanca = new ContaPoupanca(10, "Jeff");
minhaContaPoupanca.depositar(1000);
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();
minhaContaPoupanca.aplicarRendimento();

console.log(minhaContaPoupanca);