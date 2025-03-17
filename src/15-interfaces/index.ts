/**
 * Representam contratos que um objeto ou uma classe devem seguir
 * Definem apenas a assinatura dos métodos ou dos atributos públicos
 */

// interface Endereco {
//   rua: string,
//   bairro: string,
//   cidade: string
// }

// const meuEndereco: Endereco = {
//   bairro: 'Centro',
//   cidade: "NH",
//   rua: "Rua qualquer",
//   teste: 123
// }


interface Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  ligar(): void;
  dirigir(velocidade: number): void;
}

interface VeiculoComLigar {
  ligar(senha: string): void;
}

class Carro implements Veiculo, VeiculoComLigar {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  ligar(): void {
    console.log("Ligando o motor do carro...")
  }

  dirigir(velocidade: number): void {
    console.log("Dirigindo... " + velocidade)
  }
}

class Moto implements Veiculo {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  ligar(): void {
    console.log("Ligando o motor da moto...")
  }

  comportamentoDaMoto() {
    return "dsasdsda";
  }

  dirigir(velocidade: number): void {
    console.log("Dirigindo... " + velocidade)
  }
}

const listaVeiculos: Veiculo[] = [
  new Carro("Chevrolet", "Celta", 2010),
  new Carro("Fiat", "Uno", 2010),
  new Moto("Honda", "Bis", 2008)
];

listaVeiculos[0].ligar();
listaVeiculos[2].ligar();

//Não é possível instanciar uma interface (usando new)
// console.log(meuCarro);


// type Carro = {
//   marca: string;
//   modelo: string;
//   ano?: number;
// }

// Crie uma interface Animal e uma classe cachorro que implementem
