import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const contaJeff = new ContaPoupanca(1, "Jefferson");
const contaIgor = new ContaCorrente(1000, 2, "Igor");
const contaWagner = new ContaCorrente(5000, 3, "Wagner");

contaJeff.depositar(100);
contaJeff.render(0.5);

contaIgor.depositar(5000);
contaIgor.sacar(400);

contaWagner.depositar(100);
contaWagner.sacar(200);

console.log(contaJeff.verSaldo());
console.log(contaIgor.verSaldo());
console.log(contaWagner.verSaldo());
