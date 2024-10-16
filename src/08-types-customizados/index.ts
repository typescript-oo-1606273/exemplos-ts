//Tipos simples
//Tipo union
//Tipo com alias
//Tipo interseção
//Tipo literal
//Enum

type TipoDeDado = string | number; //Union
const dado: TipoDeDado = 10;

type Endereco = {
  rua: string,
  numero: number
}
const meuEndereco: Endereco = {
  numero: 10,
  rua: 'Rua de ninguém'
}

type DiasSemana = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta'; //Literal
const meuDia: DiasSemana = 'segunda';

type Pessoa = {
  nome: string,
  idade: number
}
type AlunoTarget = {
  nome: string,
  curso: string
}
type PessoaAlunoTarget = Pessoa & AlunoTarget;

const novoAluno: PessoaAlunoTarget = {
  curso: 'Typescript',
  idade: 29,
  nome: 'Joãozinho'
}
