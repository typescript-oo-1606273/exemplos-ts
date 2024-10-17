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

function apresentar(nome: string): string {
   return `Olá, meu nome é ${nome}`; //Template Literal
}
// console.log(apresentar("Jefferson"));

function exibirIdade(nome: string, idade: number): void {
   console.log(`Meu nome ${nome} e tenho ${idade} anos`);
}
// exibirIdade("Joãozinho", 80);

//Funções anonimas
const multiplicar = function(num1: number, num2: number): number {
   return num1 * num2;
}
// console.log(multiplicar(10, 20));

//Arrow function - função de flecha
const somar = (num1: number, num2: number): number => {
   return num1 + num2;
}
// console.log(somar(10, 20));

//Funções como parâmetros
function executarOperacao(
   num1: number, num2: number, 
   operacao: ((valor1: number, valor2: number) => number)
): number {
   return operacao(num1, num2);
}
const resultado = executarOperacao(15, 20, somar);
console.log(resultado);

console.log(typeof somar);

