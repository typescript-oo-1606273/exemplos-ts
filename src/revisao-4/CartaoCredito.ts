import { MetodoPagamento } from "./MetodoPagamento";

export class CartaoCredito implements MetodoPagamento {
  nome: string = "CARTAOCREDITO";

  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado com Cartão de Crédito.`);
  }
}
