/**
 * Função Simples:
 * Crie uma função chamada saudacao que aceita um parâmetro nome do tipo string e retorna uma saudação no formato "Olá, {nome}!". Função com Parâmetros Opcionais:
 * Crie uma função chamada exibirIdade que aceita dois parâmetros: nome (string) e idade (número). O parâmetro idade deve ser opcional. A função deve retornar uma mensagem com o nome e a idade, se fornecida.
 * Crie uma função chamada void
 * Função com Vários Parâmetros:
 * Crie uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.
 * Função com Tipo de Retorno:
 * Crie uma função chamada multiplicar que aceita dois números e retorna o resultado da multiplicação. Especifique o tipo de retorno como number.
 * Função Anônima e Callback:
 * Crie uma função chamada executarOperacao que aceita dois números e uma função como parâmetros. A função passada deve executar uma operação (soma ou multiplicação) e retornar o resultado.
 * Arrow function:
 * Crie uma arrow function chamada ehPar que aceita um número e retorna um booleano indicando se o número é par.
 */

//Funções com nomes

//Paradigmas
//Orientação a objetos
//Funcional

// function somar(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const somar = function (num1: number, num2: number): number {
//   return num1 + num2;
// }; //Função anonima

const somar = (num1: number, num2: number) => {
  return num1 + num2;
}; //Arrow Function

// console.log(somar(10, 20));

//Funções como parâmetros

type Usuario = {
  login: string;
  senha: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fazerLogin(usuario: Usuario, onError: (error: string) => void) {
  //Chamar várias coisas relacionadas a fazer login...

  onError("Erro no login");
}

const jeff: Usuario = {
  login: "jefferson.cardoso",
  senha: "12345",
};

console.log("Primeira coisa");
fazerLogin(jeff, (error: string) => {
  console.log(error);
});
console.log("Outra coisa");

export {};
