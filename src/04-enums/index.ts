/**
 * Crie enums para representar os seguintes dados:
 * Dia da semana
 * Meses do ano
 * Status de um pedido
 * Cores
 * Perfil de acesso
 */

//Listas pré definidas de coisas

enum DiasDaSemana {
  DOMINGO = 1,
  SEGUNDA = 2,
  TERCA = 3,
  QUARTA = 4,
  QUINTA = 5,
  SEXTA = 6,
  SABADO = 7,
}

enum StatusPedido {
  PENDENTE = "PEN",
  ENVIADO = "ENV",
  ENTREGUE = "ENT",
}

console.log(StatusPedido.PENDENTE);

function enviarPedido(status: StatusPedido) {}

enviarPedido(StatusPedido.PENDENTE);

export {};
