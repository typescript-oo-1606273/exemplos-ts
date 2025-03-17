import { Midia } from "./Midia";

export class Filme implements Midia {
  titulo: string;
  ano: number;
  diretor: string;

  constructor(titulo: string, diretor: string, ano: number) {
    this.titulo = titulo;
    this.ano = ano;
    this.diretor = diretor;
  }

  exibirInfo(): string {
    return "Título:" + this.titulo + ", Diretor: " + this.diretor + "Ano: " + this.ano;
  }

}