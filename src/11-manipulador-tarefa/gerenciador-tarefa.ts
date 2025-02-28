import { SituacaoTarefa } from "./situacao-tarefa";
import { Tarefa } from "./tarefa";

const tarefas: Array<Tarefa> = [];

export function adicionar(tarefa: Tarefa): Tarefa[] {
  tarefas.push(tarefa);

  return tarefas;
}

export function buscar(id: number): Tarefa | null {
  return tarefas.find((tarefa) => tarefa.id === id) || null;
}

export function listar(ids: number[]): Tarefa[] {
  return tarefas.filter((tarefa) => ids.includes(tarefa.id));
}

export function alterarSituacao(id: number, situacao: SituacaoTarefa) {
  const tarefa = buscar(id);

  if (tarefa) {
    tarefa.situacao = situacao;
  }

  return tarefa;
}
