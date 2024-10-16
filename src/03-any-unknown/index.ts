/**
 * Crie variáveis usando os tipos:
 * any: Para armazenar valores que podem mudar de tipo ao longo do código.
 * unknown: Para representar um valor que pode ser de qualquer tipo, 
 *  mas que precisa de verificação de tipo antes de ser utilizado.
 */

let valor: any = "Teste";

valor = 10;
valor = true;
valor = { nome: "Jeff" };


let texto: unknown = "Qualquer coisa";

let palavras = texto as String;

palavras.toUpperCase();

let valores: Array<number> = [10, 15, 20];

let minhaStringFalsa: string = valores as unknown as string;

minhaStringFalsa.split(' ');
