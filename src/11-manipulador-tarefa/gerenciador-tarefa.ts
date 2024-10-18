import { Tarefa } from './tarefa';

let tarefas: Tarefa[] = [];

export function adicionar(tarefa: Tarefa): Tarefa[] {
   tarefas.push(tarefa);
   return tarefas;
}

export function listar(): Tarefa[] {
   return tarefas;
}

export function buscar(id: number) {
   return tarefas.find((item) => item.id == id) ?? null;
}

export function remover(id: number) {
   tarefas = tarefas.filter((item) => item.id != id);
}