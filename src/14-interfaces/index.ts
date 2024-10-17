/**
 * Representam contratos que um objeto ou uma classe devem seguir
 * Definem apenas a assinatura dos métodos ou dos atributos públicos
 */


interface Carro {
  marca: string;
  modelo: string;
  ano?: number;
}

// type Carro = {
//   marca: string;
//   modelo: string;
//   ano?: number;
// }


// Crie uma interface Animal e uma classe cachorro que implementem 