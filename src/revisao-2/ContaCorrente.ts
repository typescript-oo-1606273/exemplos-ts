import { Conta } from "./Conta";
import { ErroSaldoInsuficiente } from "./ErroSaldoInsuficiente";

//A Conta Corrente tem um limite de cheque especial,
//permitindo sacar além do saldo, até um valor limite.

//dado limite do cheque especial
//comportamento sacar
export class ContaCorrente extends Conta {
  limiteChequeEspecial: number;

  constructor(
    limiteChequeEspecial: number,
    numero: number,
    nomeTitular: string
  ) {
    super(numero, nomeTitular);

    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor: number): void {
    //Exemplo de polimorfismo
    const novoSaldo = this.saldo - valor;

    if (novoSaldo < 0 && novoSaldo + this.limiteChequeEspecial < 0) {
      throw new ErroSaldoInsuficiente();
    }

    this.saldo -= valor;
  }
}
