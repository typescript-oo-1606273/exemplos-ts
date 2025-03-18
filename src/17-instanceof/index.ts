//Carro
//Produto
//instanceof vs typeof

abstract class Veiculo {
  abstract dirigir(): void;
}
class Carro extends Veiculo {
  modelo: string;

  constructor(modelo: string) {
    super();

    this.modelo = modelo;
  }

  dirigir() {
    console.log("Estou dirigindo...");
  }
}

const gol = new Carro("Gol");

if (gol instanceof Carro) {
  console.log("É um carro");
}
if (gol instanceof Veiculo) {
  console.log("É um veículo");
}

console.log(typeof gol);
console.log(typeof "texto qualquer");

export {};
