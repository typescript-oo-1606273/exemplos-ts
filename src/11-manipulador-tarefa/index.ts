/**
 * Desenvolver um manipulador de tarefas que gerencie uma lista de tarefas, permitindo adicionar, listar, buscar, remover e alterar o status das tarefas.
 * Uma tarefa deve conter as seguintes propriedades:
    id (número): um identificador único para a tarefa.
    descricao (string): uma descrição da tarefa.
    status (StatusTarefa): o status atual da tarefa (PENDENTE, ANDAMENTO, CONCLUIDA).
    observacoes (string): observações relacionadas a tarefa (opcional)
 */

import { adicionar, buscar, listar, remover } from "./gerenciador-tarefa";
import { alterarStatus, StatusTarefa, Tarefa } from "./tarefa";

adicionar({
   id: 1,
   descricao: "Desc",
   status: StatusTarefa.PENDENTE,
   observacoes: "Minhas observações"
});
adicionar({
   id: 2,
   descricao: "Desc",
   status: StatusTarefa.PENDENTE,
   observacoes: "Minhas observações"
});
adicionar({
   id: 3,
   descricao: "Desc",
   status: StatusTarefa.PENDENTE,
   observacoes: "Minhas observações"
});

alterarStatus(buscar(1) as Tarefa, StatusTarefa.CONCLUIDA);
alterarStatus(buscar(2) as Tarefa, StatusTarefa.CONCLUIDA);
alterarStatus(buscar(3) as Tarefa, StatusTarefa.CONCLUIDA);

remover(1);
remover(2);
remover(3);

console.log(listar());