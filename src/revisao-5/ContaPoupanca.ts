import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  aplicarRendimento(): void {
    this.saldo = this.saldo + (this.saldo * 0.005);
  }
}