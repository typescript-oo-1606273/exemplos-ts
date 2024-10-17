//Tipo union (|)
type TipoDeDado = string | number; //Union
const dado: TipoDeDado = 10;

//Tipo com alias
type Endereco = {
  rua: string,
  numero: number
}
const meuEndereco: Endereco = {
  numero: 10,
  rua: 'Rua de ninguém'
}

//Tipo literal
type DiasSemana = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta'; //Literal
const meuDia: DiasSemana = 'segunda';

//Tipo com interseção (&)
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
