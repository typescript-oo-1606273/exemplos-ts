//Destructuring

/** Extraia valores de um objeto Aluno */

type Aluno = {
  nome: string;
  idade: number;
  telefone: number;
  documento: number;
};

const igor: Aluno = {
  nome: "Igor",
  idade: 30,
  documento: 1221212132,
  telefone: 51992192192,
};

// const idade = igor.idade;
// const documento = igor.documento;

// const documento = igor.documento;
// const outrosDados = {
//   nome: igor.nome,
//   idade: igor.idade,
//   telefone: igor.telefone,
// };
const { documento, ...outrosDados } = igor;
// console.log(documento, outrosDados);

/** Extraia valores de um objeto Carro alterando o nome da variável de saída */
type Carro = {
  marca: string;
  modelo: string;
};
const corsa: Carro = {
  marca: "Chevrolet",
  modelo: "Corsa",
};

// const { marca: marcaCarro, modelo: modeloCarro } = corsa;
// console.log(marcaCarro, modeloCarro);

/** Unifique um objeto usuário e um objeto endereço em um só */
const curso = {
  nome: "Typescript com OO",
  data: "27 de Fevereiro",
};
const professor = {
  nome: "Jefferson",
  idade: 29,
};
const relatorio = { ...curso, ...professor };
// console.log(relatorio);
/** Unifique dois arrays em um só */

const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

// console.log(numerosPares.concat(numerosImpares));
// const numeros = [...numerosPares, ...numerosImpares];
// console.log(numeros);

/** Extraia valores de um array */

const [primeiroNumero, segundoNumero] = [10, 20];
// const primeiroNumero = valores[0];
// const segundoNumero = valores[1];

console.log(primeiroNumero, segundoNumero);

export {};
