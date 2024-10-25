/**
 * Estrutura Básica da Conta:

Toda conta tem um número, o nome do titular, e um saldo.
A conta deve permitir depositar, sacar e ver o saldo.
 */

import { ErroSaldoInsuficiente } from "./ErroSaldoInsuficiente";

export class Conta {
  protected numero: number;
  protected nomeTitular: string;
  protected saldo: number = 0;

  constructor(numero: number, nomeTitular: string) {
    this.numero = numero;
    this.nomeTitular = nomeTitular;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (this.saldo - valor < 0) {
      throw new ErroSaldoInsuficiente();
    }

    this.saldo -= valor;
  }

  verSaldo() {
    return this.saldo;
  }
}
