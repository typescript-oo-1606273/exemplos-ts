/**
 * Crie variáveis utilizando os seguintes tipos primitivos
 *
 * number: Para representar a idade e altura de uma pessoa.
 * string: Para armazenar o nome e uma apresentação personalizada.
 * boolean: Para verificar se a pessoa está fazendo os exercícios.
 * null: Para representar a ausência de um valor
 * array: Para armazenar as notas de um estudante em um array de números.
 * object: Para armazenar estruturas mais complexas, como um endereço
 */

const idade: number = 25;
const apresentacao: string = "Meu nome é Jefferson";
const vamosAprender: boolean = true;

//null
const algumaCoisa = null;

if (!algumaCoisa) {
  //null, false, ""
  console.log("É nulo");
}

const listaNomes: string[] = ["Luiz", "Helen", "Fernando", "Jefferson"]; //Lista de string
const listaPessoas: Array<string> = ["Luiz", "Helen", "Fernando", "Jefferson"];

/**
 * nome: string
 * idade: number
 * cidade: string
 */
const pessoa: {
  nome: string;
  idade: number;
  cidade: string;
} = {
  nome: "Jeff",
  idade: 29,
  cidade: "Novo Hamburgo",
};

const dataAtual = new Date(); //moment, date-fns

console.log(listaNomes, pessoa);

export {};
