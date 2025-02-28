//Tipos primitivos
const texto: string = "Bem-vindos a terceira aula de Typescript";
//number, boolean

//Variaveis sem valor
let variavelVazia = "";
let variavelNula = null;
let variavelFalsa = false;
let variavelZero = 0;

//Any
let variavelAny: any = "Texto";
variavelAny = true;
variavelAny = 10;

//Objetos
type Endereco = {
  rua: string;
};
type Pessoa = {
  nome: string;
  endereco: Endereco;
};
type Valor = number | string | boolean;

type Estudante = {
  curso: string;
};
type PessoaEstudante = Pessoa & Estudante;

enum StatusPedido {
  PENDENTE = 0,
  ENVIADO = 1,
  ENTREGUE = 2,
}

export {};
