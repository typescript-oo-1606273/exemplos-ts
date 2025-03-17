/** 
  Atributos (Dados):
    marca: A marca da caneta (string).
    cor: A cor da caneta (string).
    modelo: O modelo da caneta (string).
    nivelDeTinta:
  Métodos:
    escrever(texto: string)     
    trocarTinta
*/

import { Produto } from "./Produto";

export class Caneta extends Produto {
  private nivelDeTinta: number = 100;

  constructor(marca: string, cor: string, modelo: string) {
    super(marca, cor, modelo);
  }

  escrever(texto: string): void {
    if (this.nivelDeTinta > 0) {
      console.log(texto);

      this.nivelDeTinta = this.nivelDeTinta - 10;
    }
  }

  getMarca() {
    return this.marca;
  }

  getNivelTinta() {
    return this.nivelDeTinta;
  }
}
