import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  private limite: number;

  constructor(numero: number, nomeTitular: string, limite: number = 0) {
    super(numero, nomeTitular);

    this.limite = limite;
  }

  sacar(valor: number): void {
    const novoSaldo = this.saldo - valor;

    if((novoSaldo + this.limite) >= 0) {
      this.saldo = novoSaldo;
    }
  }
}