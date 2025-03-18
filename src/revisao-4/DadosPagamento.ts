import { TipoMetodoPagamento } from "./TipoMetodoPagamento";

export interface DadosPagamento {
  valor: number;
  metodo: TipoMetodoPagamento;
}