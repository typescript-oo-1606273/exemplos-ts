class Veiculo {
  modelo: string;

  constructor(parametroModelo: string) {
    this.modelo = parametroModelo;
  }

  dirigir() {
    console.log("Estou dirigindo...");
  }

  parar() {
    console.log("Estou parando...");
  }
}

class Bicicleta extends Veiculo {

  cilindradas: string;

  constructor(parametroModelo: string, parametroCilindradas: string) {
    super(parametroModelo);

    this.cilindradas = parametroCilindradas;
  }

  dirigir() {
    console.log("Estou dirigindo a bicicleta...");
  }

  parar() {
    console.log("Estou parando a bicicleta...");
  }
}

class Caminhao extends Veiculo {

}

const minhaBicleta = new Bicicleta("Monark", "122121");
const meuCaminhao = new Caminhao("Volvo");

console.log(minhaBicleta.modelo);
console.log(meuCaminhao.modelo);

// minhaBicleta.dirigir();
// minhaBicleta.parar();
// meuCaminhao.dirigir();

// minhaBicleta.parar();




















class Animal {
  constructor(public nome: string, public idade: number) {}

  emitirSom(): void {
    console.log(`${this.nome} está emitindo um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number, public raca: string) {
    super(nome, idade); // Chama o construtor da classe base
  }

  emitirSom(): void {
    console.log(`${this.nome} está latindo.`);
  }

  correr(): void {
    console.log(`${this.nome}, o ${this.raca}, está correndo.`);
  }
}

class Gato extends Animal {
  emitirSom(): void {
    console.log(`${this.nome} está miando.`);
  }

  pular(): void {
    console.log(`${this.nome} está pulando em algum lugar alto.`);
  }
}

const cachorro = new Cachorro('Pluto', 5, 'Labrador');
const gato = new Gato('Mimi', 3);

// cachorro.emitirSom();
// cachorro.correr();

// gato.emitirSom();
// gato.pular();