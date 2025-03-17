import { Midia } from "./Midia";

export class Livro implements Midia {
  titulo: string;
  autor: string;
  ano: number;

  constructor(titulo: string, autor: string, ano: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  exibirInfo(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
  }

}