/**
 * Crie um array de números que contenha os primeiros cinco números inteiros positivos.
 * Crie um array que armazene os nomes de três frutas
 * Defina um tipo Aluno que tenha as propriedades codigo (número) e nome (string).
 * Crie um array de objetos Aluno contendo informações de cinco alunos.
 * Crie uma matriz de números 3x3 que represente uma tabela de pontuações em um jogo.
 * */

const numeros: Array<number> = [1, 2, 3, 4, 5];
const palavras: string[] = ["Oi", "Bom dia"];
const verdadeirosOuFalsos: boolean[] = [true, false, true, true];

const stringsOuBoolean: (string | boolean)[] = ["true", true, false, "false"];

const listaDefinida: [boolean, string, number] = [true, "Texto", 10];

type Professor = {
  nome: string;
};

const professores: Professor[] = [
  {
    nome: "Jeff",
  },
  {
    nome: "Cicero",
  },
  {
    nome: "Wagner",
  },
];

// for (let index = 0; index < professores.length; index++) {
//   console.log(`Sou o professor ${professores[index].nome} `); //Template string ou Template literal
// }

const coordenadas: number[][] = [
  [10, 12, 15],
  [2, 3, 5],
  [7, 9, 10],
];

for (let index = 0; index < coordenadas.length; index++) {
  const item = coordenadas[index];

  for (
    let indiceNumero = 0;
    indiceNumero < coordenadas.length;
    indiceNumero++
  ) {
    const numero = coordenadas[index][indiceNumero];

    console.log(numero);
  }
}

export {};
