/**
 * Crie variáveis usando os tipos:
 * any: Para armazenar valores que podem mudar de tipo ao longo do código.
 * unknown: Para representar um valor que pode ser de qualquer tipo,
 *  mas que precisa de verificação de tipo antes de ser utilizado.
 */

let valor: any = 10; //Em Javascript tudo é any

valor = "Qualquer texto";
valor = false;
valor = {
  nome: "Jeff",
};

let outroValor: unknown = {
  nome: "Jeff",
};

let pessoa = outroValor as {
  nome: string;
}; //casting

console.log(outroValor, pessoa);

export {};
