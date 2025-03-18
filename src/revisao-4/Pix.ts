import { MetodoPagamento } from "./MetodoPagamento";

export class Pix implements MetodoPagamento {
  nome: string = "PIX";

  pagar(valor: number): void {
    console.log(`Pagamento de R$${valor} realizado via Pix.`);
  }
}
