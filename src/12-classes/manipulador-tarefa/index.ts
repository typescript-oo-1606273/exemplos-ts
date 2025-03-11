/**
 * Desenvolver um manipulador de tarefas que gerencie uma lista de tarefas, permitindo adicionar, listar, buscar, remover e alterar a situação das tarefas.
 * Uma tarefa deve conter as seguintes propriedades:
    id (número): um identificador único para a tarefa.
    descricao (string): uma descrição da tarefa.
    situacao (SituacaoTarefa): o situacao atual da tarefa (PENDENTE, ANDAMENTO, CONCLUIDA).
    observacoes (string): observações relacionadas a tarefa (opcional)
 */

import { GerenciadorTarefas } from "./gerenciador-tarefa";
import { SituacaoTarefa } from "./situacao-tarefa";
import { Tarefa } from "./tarefa";

const gerenciador = new GerenciadorTarefas();

gerenciador.adicionar(new Tarefa(10, "Comprar roupa", SituacaoTarefa.PENDENTE));
gerenciador.adicionar(new Tarefa(25, "Almoçar", SituacaoTarefa.PENDENTE));
gerenciador.adicionar(new Tarefa(35, "Dar aula", SituacaoTarefa.PENDENTE));

// console.log(gerenciador.buscar(35));
// console.log(gerenciador.buscar(2121));
// console.log(gerenciador.listar([2112]));

console.log(gerenciador.buscar(35));
gerenciador.alterarSituacao(35, SituacaoTarefa.CONCLUIDA);
console.log(gerenciador.buscar(35));
