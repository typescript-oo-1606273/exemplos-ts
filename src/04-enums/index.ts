/**
 * Crie enums para representar os seguintes dados:
 * Dia da semana
 * Meses do ano
 * Status de um pedido
 * Cores
 * Perfil de acesso
 */

enum DiasDaSemana {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
}

const diaEscolhido: DiasDaSemana = DiasDaSemana.QUARTA;

enum StatusPedido {
  AGUARDANDO_PAGAMENTO = "AP",
  TRANSPORTE = "TR",
  ENTREGUE = "EN",
}

enum Cor {
  VERMELHO = "V",
  AMARELO = "L",
  PRETO = "P",
}

enum PerfilAcesso {
  ADMINISTRADOR = 0,
  ALUNO = 1,
  PROFESSOR = 2,
}

export {};
