export abstract class Conta {
  public readonly numero: number;
  public readonly nomeTitular: string;
  protected saldo: number;

  constructor(numero: number, nomeTitular: string) {
    this.numero = numero;
    this.nomeTitular = nomeTitular;
    this.saldo = 0;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    const novoSaldo = this.saldo - valor;

    if(novoSaldo >= 0) {
      this.saldo = novoSaldo;
    }
  }
}