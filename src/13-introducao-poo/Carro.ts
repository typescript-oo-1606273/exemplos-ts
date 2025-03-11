import { Produto } from "./Produto";

export class Carro extends Produto {
  dirigir() {
    console.log("Estou dirigindo");
  }
}