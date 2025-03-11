/** Objetos com funções
 * Pessoa
 */

// type TipoPessoa = {
//   nome: string;
//   idade: number;
//   apresentar: () => void
// }

// const jeff: TipoPessoa = {
//   nome: 'Jefferson',
//   idade: 29,
//   apresentar: () => {
//     console.log("Oi, sou " + jeff.nome)
//   }
// }

// jeff.apresentar();

class Pessoa {
  //visibilidade (public, private e protected)
  public readonly nome: string; //atributo
  private idade: number; //atributos

  constructor(parametroNome: string, parametroIdade: number) {
    this.nome = parametroNome;
    this.idade = parametroIdade;

    console.log("Aqui, estou no construtor");
  }

  getNome() { //getters
    return this.nome;
  }

  getIdade() { //getters
    return this.idade;
  }

  setIdade(novaIdade: number) { //setters
    if(novaIdade <= 120) {
      this.idade = novaIdade;
    }
  }

  apresentar() { //método
    console.log("Oi, sou " + this.nome);
  }
}

const jeff = new Pessoa("Jeff", 29);

// jeff.nome = "Outro nome";

// jeff.setIdade(200);
// const joao = new Pessoa("João", 50);
// const pedro = new Pessoa("Pedro", 30);

// jeff.apresentar()

// jeff.setIdade(30);

// console.log(jeff.getIdade());

/**
 * Classes são objetos "inteligentes"
 * Podem ter funções e atributos
 * Os atributos e métodos podem ser visiveis apenas dentro da classe
 * Podem interagir com outras classes
 */

/**
Classe Pessoa
Crie uma classe Pessoa com propriedades para nome e idade. Adicione um método que apresenta a pessoa.
*/

/**
Classe Carro
Crie uma classe Carro com propriedades para a marca e modelo. Adicione métodos para obter marca e modelo do carro e um construtor para receber os dados;
*/

/**
Classe Livro
Crie uma classe Livro com propriedades para título e autor. Adicione um método que exibe um resumo do livro.
*/

/**
Classe Produto
Crie uma classe Produto com propriedades para nome e preço. Adicione um método que mostra o preço do produto formatado.
*/

/**
Classe Contador
Crie uma classe Contador com uma propriedade privada para contagem. Adicione métodos para incrementar a contagem e mostrar o valor atual.
*/

export {};
