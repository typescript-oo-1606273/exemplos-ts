import { MetodoPagamento } from "./MetodoPagamento";

export class BoletoBancario implements MetodoPagamento {
  nome: string = "BOLETO";

  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado com Boleto.`);
  }
}
