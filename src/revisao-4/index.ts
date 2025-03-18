import { DadosPagamento } from "./DadosPagamento";
import { FabricaPagamento } from "./FabricaPagamento";
import { MetodoPagamento } from "./MetodoPagamento";
import { TipoMetodoPagamento } from "./TipoMetodoPagamento";

const fabrica = new FabricaPagamento();

const pagamentoPix: DadosPagamento = {
  valor: 150,
  metodo: TipoMetodoPagamento.PIX,
};
const metodoPix = fabrica.obterMetodoPagamento(pagamentoPix.metodo);
metodoPix.pagar(pagamentoPix.valor);

const pagamentoBoleto: DadosPagamento = {
  valor: 299,
  metodo: TipoMetodoPagamento.BOLETO,
};
const metodoBoleto = fabrica.obterMetodoPagamento(pagamentoBoleto.metodo);
metodoBoleto.pagar(pagamentoBoleto.valor);

const pagamentoCredito: DadosPagamento = {
  valor: 1500,
  metodo: TipoMetodoPagamento.CARTAOCREDITO,
};
const metodoCredito = fabrica.obterMetodoPagamento(pagamentoCredito.metodo);
metodoCredito.pagar(pagamentoCredito.valor);
