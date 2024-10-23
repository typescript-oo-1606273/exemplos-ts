/**
 * Classes são objetos "inteligentes"
 * Podem ter funções e atributos
 * Os atributos e métodos podem ser visiveis apenas dentro da classe
 * Podem interagir com outras classes
 */

class Pessoa {
  nome: string;
  idade: number;
  private senha: string;

  constructor(
    parametroNome: string,
    parametroIdade: number,
    parametroSenha: string
  ) {
    this.nome = parametroNome;
    this.idade = parametroIdade;
    this.senha = parametroSenha;
  }

  private apresentar() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }

  chamar() {
    this.apresentar();
  }
}

const jefferson = new Pessoa("Jefferson", 29, "12345");

console.log(jefferson);

jefferson.chamar();

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
