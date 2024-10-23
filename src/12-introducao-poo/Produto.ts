import { Cores } from "./Cor";

export interface Produto { //Contrato
  obterMarca(): string;
  obterModelo(): string;
  obterCor(): Cores;
}