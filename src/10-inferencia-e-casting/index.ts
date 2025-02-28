//Inferência de tipos (determinar automaticamente qual é tipo)

let idade = 3;
let valor = "Aula de Typescript";
let booleano = true;
let pessoa = {
  nome: "Jeff",
  cidade: "Novo Hamburgo",
};

const nome: any = "Jeff";
const outroNome = nome as string;

const numero = 10;
const numeroCastString = numero as unknown as string;
const numeroConvertidoString = String(numero);

// Boolean("true");
// Number("10");

// console.log(numeroCastString, numeroConvertidoString);

enum TipoPessoa {
  PESSOA_FISICA = "PF",
  PESSOA_JURIDICA = "PJ",
}

const tipo = "LK" as TipoPessoa;

// console.log(tipo);

type Computador = {
  marca: string;
  modelo: string;
  ano: number;
};

const meuComputador = {
  marca: "Positivo",
  modelo: "Computador para todos",
} as Computador;

console.log(meuComputador.ano);

export {};
