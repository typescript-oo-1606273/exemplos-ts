import { SituacaoTarefa } from "./situacao-tarefa";
import { Tarefa } from "./tarefa";

export class GerenciadorTarefas {
  public tarefas: Tarefa[] = [];

  adicionar(tarefa: Tarefa): Tarefa[] {
    this.tarefas.push(tarefa);

    return this.tarefas;
  }

  buscar(id: number): Tarefa | null {
    return this.tarefas.find((tarefa) => tarefa.id === id) || null;
  }

  listar(ids: number[]): Tarefa[] {
    return this.tarefas.filter((tarefa) => ids.includes(tarefa.id));
  }

  alterarSituacao(id: number, situacao: SituacaoTarefa) {
    const tarefa = this.buscar(id);
  
    if (tarefa) {
      tarefa.setSituacao(situacao);
    }
  
    return tarefa;
  }
}