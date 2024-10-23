import { Cores } from "./Cor";
import { Produto } from "./Produto";

//Classe
export class Caneta implements Produto {
  //Atributos ou propriedades
  private cor: Cores;
  private marca: string;
  private modelo: string;

  private nivelDeTinta: number = 100;

  constructor(parametroCor: Cores, parametroMarca: string, parametroModelo: string) { //Construtor
    this.cor = parametroCor;
    this.marca = parametroMarca;
    this.modelo = parametroModelo;
  }

  escrever(texto: string) { //Método ou função
    const novoNivelDeTinta = this.nivelDeTinta - texto.length;

    if (novoNivelDeTinta < 0) {
      return "Não tem mais tinta, recarregue";
    } else {
      this.nivelDeTinta = novoNivelDeTinta;

      return "Escrevendo...";
    }
  }

  //Função ou método
  setCor(parametroCor: Cores) { //setter
    this.cor = parametroCor;
  }

  obterCor() { //getter
    return this.cor;
  }

  obterMarca() { //getter
    return this.marca;
  }

  obterModelo() {
    return this.modelo;
  }
}


const canetaBicAzul = new Caneta(Cores.AZUL, "Bic", "Esferográfica"); //Instanciando a classe


// console.log(canetaBicAzul.setCor(Cores.PRETO));


// console.log(canetaBicAzul.escrever("Estamos aprendendo POO"));
// console.log(canetaBicAzul.escrever("Estamos aprendendo Typescript"));
// console.log(canetaBicAzul.escrever("Estamos aprendendo Typescript"));
// console.log(canetaBicAzul.escrever("Estamos aprendendo Typescript"));

// console.log(canetaBicAzul);

// console.log(canetaBicAzul);


// console.log(canetaBicAzul);
// canetaBicAzul.setCor("Verde");
// console.log(canetaBicAzul.getCor());

// const canetaBicPreta = new Caneta("Preta", "Bic", "Esferográfica"); //Instanciando a classe

// console.log(typeof canetaBicAzul);
// console.log(canetaBicAzul, canetaBicPreta);





























/**
 *
  Atributos (Dados):
    cor: A cor da tinta da caneta (string).
    marca: A marca da caneta (string).
    modelo: A marca da caneta (string).
    tamanhoPonta: O tamanho da ponta da caneta (número, por exemplo, 0.5, 1.0).
    nivelTinta: A quantidade de tinta restante (número, de 0 a 100).
    tampa: Indica se a caneta está tampada ou destampada (boolean).
  
  Métodos:
    escrever(texto: string): Um método que simula a escrita, diminuindo o nível de tinta conforme o texto é escrito.
    tampar(): Um método que tampa a caneta.
    destampar(): Um método que destampa a caneta.
    verificarTinta(): Exibe a quantidade de tinta restante.
    trocarTinta(novaCor: string): Troca a cor da tinta, se for recarregável.

 */