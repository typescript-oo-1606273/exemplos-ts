/**
 * Problema: Criar uma função que funcione para vários tipos, como number, string, ou boolean. 
 * Sem genéricos, você teria que fazer múltiplas versões da mesma função para cada tipo.
 * Ajudam a manter os tipos em casos dinâmicos evitando o uso de any
 */
function retornarValor<T>(valor: T): T {
  return valor;
}
const texto = retornarValor<string>('Olá'); // T é string
const numero = retornarValor<number>(123);

type RetornoOperacao<T> = {
  sucesso: boolean;
  dados?: T;
  erro?: string;
};

function validarDados<T>(dados: T): RetornoOperacao<T> {
  return {
      sucesso: true,
      dados: dados,
  };
}

const resultado1 = validarDados({ nome: "João", idade: 30 });