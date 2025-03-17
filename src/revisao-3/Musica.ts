import { Midia } from "./Midia";

export class Musica implements Midia {
  titulo: string;
  ano: number;
  artista: string;

  constructor(titulo: string, ano: number, artista: string) {
    this.titulo = titulo;
    this.ano = ano;
    this.artista = artista;
  }

  exibirInfo(): string {
    return "Título:" + this.titulo + ", Artista: " + this.artista + "Ano: " + this.ano;
  }

}