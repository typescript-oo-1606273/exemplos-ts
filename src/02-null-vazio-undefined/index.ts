/**
 * Crie variáveis que possam conter os seguintes valores:
 * 
 * null: Para representar a ausência explícita de um valor.
 * undefined: Para representar uma variável que foi declarada, mas ainda não foi atribuída.
 * Valor vazio: Para strings e arrays, demonstrando como trabalhar com valores vazios.
 */

const valorNull = null;
const valorUndefined = undefined;
const valorVazio = "";

if (valorVazio == valorNull) {
  console.log('Entrou no IF');
} else {
  console.log('Entrou no ELSE');
}