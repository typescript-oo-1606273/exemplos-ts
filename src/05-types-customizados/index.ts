/**
 *
 * 1. Defina um type criado a partir de um tipo primitivo (string, boolean, number)
 
 * 2. Defina um type alias "Endereco" com as propriedades:
 *    - rua: string
 *    - numero: number
 *    - Exemplo: Crie uma variável "meuEndereco" do tipo Endereco com valores de exemplo.
 *
 * 3. Crie um tipo literal chamado "DiasSemana" que permita apenas os seguintes valores:
 *    'segunda', 'terca', 'quarta', 'quinta' ou 'sexta'.
 *    - Exemplo: Declare uma variável "diaAtual" do tipo DiasSemana e atribua a ela um dos valores válidos.
 *
 * 4. Crie um tipo union (|) chamado "Dado" que possa ser do tipo string ou number.
 *    - Exemplo: Declare uma variável "valor" do tipo Dado e atribua a ela um número.
 *    - string | number | boolean
 *
 * 5. Crie dois tipos:
 *    - "Pessoa" com as propriedades:
 *         nome: string
 *         idade: number
 *    - "Estudante" com as propriedades:
 *         curso: string
 *         ano: number
 *    - Em seguida, utilize a interseção (&) para criar um novo tipo "Aluno" que combine as propriedades de Pessoa e Estudante.
 *    - Exemplo: Declare uma variável "alunoExemplo" do tipo Aluno com valores de exemplo.
 */

type ValorRecebido = string | number; //or

const valor: ValorRecebido = 10;

type DiasDaSemana = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

const dia: DiasDaSemana = "segunda";

console.log(valor, dia);

type Pessoa = {
  nome: string;
  idade: number;
  pais: string;
};

const jeff: Pessoa = {
  nome: "Jefferson",
  idade: 25,
  pais: "Brasil",
};

export {};
