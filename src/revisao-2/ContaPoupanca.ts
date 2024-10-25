import { Conta } from "./Conta";

//A Conta Poupança tem um rendimento mensal, que aumenta o saldo de acordo com uma taxa de juros.

export class ContaPoupanca extends Conta {
  render(taxaJuros: number) {
    if (this.saldo <= 0) {
      return;
    }

    const rendimento = this.saldo * (taxaJuros / 100);

    this.saldo = this.saldo + rendimento;
  }
}
