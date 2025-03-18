import { MetodoPagamento } from "./MetodoPagamento";

export class CartaoDebito implements MetodoPagamento {
  nome: string = "CARTAODEBITO";

  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado com Cartão de Débito.`);
  }
}
