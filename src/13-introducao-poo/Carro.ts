import { Produto } from "./Produto";

/** 
  Atributos (Dados):
    marca: A marca do carro (string).
    modelo: O modelo do carro (string).
    cor: A cor do carro (string).
    motor: O motor do carro, responsável por ligar e desligar (objeto Motor).
    tanque: O tanque de combustível, responsável pelo nível de combustível e abastecimento (objeto TanqueCombustivel).

  Métodos:
    ligar(): Liga o motor do carro, se houver combustível disponível.
    desligar(): Desliga o motor do carro.
    dirigir(distancia: number): Simula a condução do carro por uma determinada distância, consumindo combustível.
    abastecer(quantidade: number): Adiciona combustível ao tanque, sem ultrapassar sua capacidade máxima.
    status(): Exibe o status atual do carro, incluindo motor ligado/desligado e nível de combustível.
*/

export class Carro extends Produto {
  dirigir() {
    console.log("Estou dirigindo");
  }
}
