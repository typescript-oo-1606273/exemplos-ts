import { BoletoBancario } from "./BoletoBancario";
import { CartaoCredito } from "./CartaoCredito";
import { CartaoDebito } from "./CartaoDebito";
import { MetodoPagamento } from "./MetodoPagamento";
import { Pix } from "./Pix";
import { TipoMetodoPagamento } from "./TipoMetodoPagamento";

export class FabricaPagamento {
  
  metodosPagamento: Record<string, MetodoPagamento>;

  constructor() {
    this.metodosPagamento = {
      "PIX": new Pix(),
      "BOLETO": new BoletoBancario(),
      "CARTAOCREDITO": new CartaoCredito(),
      "CARTAODEBITO": new CartaoDebito(),
    }
  }

  obterMetodoPagamento(metodo: TipoMetodoPagamento): MetodoPagamento {
    if(this.metodosPagamento[metodo]) {
      return this.metodosPagamento[metodo];
    }

    throw new Error("Método de pagamento inválido");
  }
}
