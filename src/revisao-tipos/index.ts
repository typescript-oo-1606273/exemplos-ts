//Tipos primitivos
const texto: string = "Bem-vindos a 4ª aula de Typescript";
const vamosRevisar: boolean = true;
const idade: number = 29;
console.log(texto);
//////////////////////////////////


//Variaveis sem valor
let variavelQualquer; //undefined
let outraVariavelQualquer = ""; //vazio
let variavelNula = null; //nulo
let variavelBooleana = false;
let variavelComTexto = "Kauhe";
let variavelComNumero = 10;
let variavelComZero = 0;
let variavelObjetoVazio = {}; //Cai no If
let variavelArrayVazio: any = []; //Cai no If

// if (variavelNula) {
//   console.log("ENTROU NO IF");
// } else {
//   console.log("ENTROU NO ELSE");
// }
//////////////////////////////////

//Objetos
type Endereco = {
  rua: string,
  numero: number,
  bairro: string,
  cidade: string
}
const endereco: Endereco = {
  rua: "Rua Boa Vista",
  numero: 2022,
  bairro: "Centro",
  cidade: "Ivoti",
};
/////////////////////


//Outros tipos de estruturas
//Tuplas
let livro = ["Clean code", 2020]; 
const [titulo, ano] = livro; //Desustructuring

//Records
type PessoaFisica = {
  nome: string,
  idade: number
}
let dicionarioDePessoas: Record<number, PessoaFisica> = {
  1000: {
    nome: "João",
    idade: 35,
  },
  1002: {
    nome: "João",
    idade: 35,
  },
  1003: {
    nome: "João",
    idade: 35,
  },
};
// console.log(dicionarioDePessoas[1000]);

//array de string, number, boolean
let listaQualquer: Array<string | number | boolean> = [10, "Oi", true, 25, "Alguma coisa", false, "Outra coisa"];
//////////////////////////////////


//Funções
function apresentar(nome: string) {
  console.log(`Prazer, sou ${nome}`);
}

type Operacao = (parametro1: number, parametro2: number) => number;

const somar: Operacao = (num1: number, num2: number) => {
  return num1 + num2;
};
const subtrair: Operacao = (num1: number, num2: number) => {
  return num1 - num2;
};
//////////////////////////////////


//Tipos nomeados
type Pessoa = {
  nome: string;
  idade: number;
};

type Aluno = {
  curso: string;
  dataMatricula: Date;
} & Pessoa;

const lucas: Aluno = {
  curso: 'Typescript',
  dataMatricula: new Date(),
  nome: 'Lucas',
  idade: 25
}
console.log(lucas);
