/**
 * Crie variáveis que possam conter os seguintes valores:
 *
 * null: Para representar a ausência explícita de um valor.
 * undefined: Para representar uma variável que foi declarada, mas ainda não foi atribuída.
 * Valor vazio: Para strings e arrays, demonstrando como trabalhar com valores vazios.
 */

const valor = null;
const valorIndefinido = undefined;

if (!valor) {
  //falsy falso
  //nulo
  // console.log("Valor nulo");
}

if (!valorIndefinido) {
  //falsy falso
  //indefinido
  // console.log("Valor indefinido");
}

const pessoa: any = {
  nome: "Jeff",
};

if (pessoa.idade == undefined) {
  // console.log("Pessoa não tem idade");
}

const vazio = "";

if (!vazio) {
  //falsy falso
  console.log("É vazio");
}

export {};
