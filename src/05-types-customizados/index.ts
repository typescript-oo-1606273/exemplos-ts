/**
 *
 * 1. Defina um type alias "Endereco" com as propriedades:
 *    - rua: string
 *    - numero: number
 *    - Exemplo: Crie uma variável "meuEndereco" do tipo Endereco com valores de exemplo.
 *
 * 2. Crie um tipo literal chamado "DiasSemana" que permita apenas os seguintes valores:
 *    'segunda', 'terca', 'quarta', 'quinta' ou 'sexta'.
 *    - Exemplo: Declare uma variável "diaAtual" do tipo DiasSemana e atribua a ela um dos valores válidos.
 *
 * 3. Crie um tipo union (|) chamado "Dado" que possa ser do tipo string ou number.
 *    - Exemplo: Declare uma variável "valor" do tipo Dado e atribua a ela um número.
 *
 * 4. Crie dois tipos:
 *    - "Pessoa" com as propriedades:
 *         nome: string
 *         idade: number
 *    - "Estudante" com as propriedades:
 *         curso: string
 *         ano: number
 *    - Em seguida, utilize a interseção (&) para criar um novo tipo "Aluno" que combine as propriedades de Pessoa e Estudante.
 *    - Exemplo: Declare uma variável "alunoExemplo" do tipo Aluno com valores de exemplo.
 */

//Tipo union (|)
type TipoDeDado = string | number; //Union
const dado: TipoDeDado = 10;

//Tipo com alias
type Endereco = {
  rua: string;
  numero: number;
};
const meuEndereco: Endereco = {
  numero: 10,
  rua: "Rua de ninguém",
};

//Tipo literal
type DiasSemana = "segunda" | "terca" | "quarta" | "quinta" | "sexta"; //Literal
const meuDia: DiasSemana = "segunda";

//Tipo com interseção (&)
type Pessoa = {
  nome: string;
  idade: number;
};
type AlunoTarget = {
  nome: string;
  curso: string;
};
type PessoaAlunoTarget = Pessoa & AlunoTarget;
const novoAluno: PessoaAlunoTarget = {
  curso: "Typescript",
  idade: 29,
  nome: "Joãozinho",
};

export {};
