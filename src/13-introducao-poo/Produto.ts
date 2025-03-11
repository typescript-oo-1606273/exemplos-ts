export abstract class Produto {
  protected readonly marca: string;
  protected readonly cor: string;
  protected readonly modelo: string;

  constructor(marca: string, cor: string, modelo: string) {
    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
  }
}