import { Cores } from "./Cor";
import { Produto } from "./Produto";

class Pedal {
  private estaPisado: boolean = false;

  pisar() {
    this.estaPisado = true;
    ///Alguma coisa
  }
}

class Motor {
  private potencia: number;
  private contadorGiros: number = 0;

  constructor(parametroPotencia: number) {
    this.potencia = parametroPotencia;
  }

  girar() {
    this.contadorGiros = this.contadorGiros + 1000;
  }
}

export class Carro implements Produto {
  private velocidade: number = 0;
  private cor: Cores;
  private marca: string;
  private modelo: string;
  private motor: Motor;
  
  private pedalAcelerador: Pedal;
  private pedalFreio: Pedal;

  constructor(
    parametroMarca: string,
    parametroModelo: string,
    parametroCor: Cores,
    potenciaMotor: number
  ) {
    this.cor = parametroCor;
    this.marca = parametroMarca;
    this.modelo = parametroModelo;
    
    this.motor = new Motor(potenciaMotor);

    this.pedalAcelerador = new Pedal();
    this.pedalFreio = new Pedal();
  }

  acelerar() {
    this.velocidade = this.velocidade + 10;

    if (this.velocidade > 200) {
      this.velocidade = 200;
    }

    this.pedalAcelerador.pisar();
    this.motor.girar();
  }

  freiar() {
    this.velocidade = this.velocidade - 10;

    if (this.velocidade < 0) {
      this.velocidade = 0;
    }

    this.pedalFreio.pisar();
  }

  obterCor() {
    return this.cor;
  }

  obterMarca() {
    return this.marca;
  }

  obterModelo() {
    return this.modelo;
  }

  mostrarInformacoes() {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Cor: " + this.cor);
  }
}

const gol = new Carro("Wolkswagem", "Gol", Cores.AZUL, 1000);

gol.acelerar();
gol.acelerar();
gol.freiar();
gol.freiar();
gol.freiar();
gol.freiar();
gol.freiar();
gol.freiar();
gol.acelerar();
gol.acelerar();
// gol.mostrarInformacoes();




























/**
  Atributos (Dados):
    marca: A marca do carro (string).
    modelo: O modelo do carro (string).
    cor: A cor do carro (string).
    velocidadeAtual: A velocidade atual do carro (número).
    tanqueCombustivel: A quantidade de combustível no tanque (número, de 0 a 100).
    ligado: Indica se o carro está ligado ou desligado (boolean).
  Métodos:
    ligar(): Liga o carro.
    desligar(): Desliga o carro.
    acelerar(quantidade: number): Aumenta a velocidade do carro em uma quantidade específica, diminuindo o combustível.
    frear(): Reduz a velocidade para zero.
    abastecer(quantidade: number): Adiciona combustível ao tanque.
    status(): Mostra o status atual do carro (velocidade, combustível, ligado/desligado).
*/