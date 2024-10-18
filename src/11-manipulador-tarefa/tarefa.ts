export enum StatusTarefa {
  PENDENTE = 0,
  ANDAMENTO = 1,
  CONCLUIDA = 2,
}

export type Tarefa = {
  id: number,
  descricao: string,
  status: StatusTarefa,
  observacoes?: string
}

export function alterarStatus(tarefa: Tarefa, status: StatusTarefa) {
  tarefa.status = status;
}