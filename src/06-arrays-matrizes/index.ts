/**
 * Crie um array de números que contenha os primeiros cinco números inteiros positivos.
 * Crie um array que armazene os nomes de três frutas
 * Defina um tipo Aluno que tenha as propriedades codigo (número) e nome (string).
 * Crie um array de objetos Aluno contendo informações de cinco alunos.
 * Crie uma matriz de números 3x3 que represente uma tabela de pontuações em um jogo.
 * */

const numerosPositivos: Array<number> = [1, 2, 3, 4, 5];
const listaFrutas: string[] = ["Banana", "Maça", "Cacau"];

type Aluno = {
  nome: string;
};

const listaDeAlunos: Aluno[] = [
  {
    nome: "Wagner",
  },
  {
    nome: "Helen",
  },
];

const dimensoes: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let index = 0; index < dimensoes.length; index++) {
  const numeros = dimensoes[index];

  for (let outroIndex = 0; outroIndex < numeros.length; outroIndex++) {
    const numero = numeros[outroIndex];
    console.log(numero);
  }
}

export {};
