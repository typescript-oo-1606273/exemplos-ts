/**
 * Desenvolver um manipulador de tarefas que gerencie uma lista de tarefas, permitindo adicionar, listar, buscar, remover e alterar a situação das tarefas.
 * Uma tarefa deve conter as seguintes propriedades:
    id (número): um identificador único para a tarefa.
    descricao (string): uma descrição da tarefa.
    situacao (SituacaoTarefa): o situacao atual da tarefa (PENDENTE, ANDAMENTO, CONCLUIDA).
    observacoes (string): observações relacionadas a tarefa (opcional)
 */

import {
  adicionar,
  alterarSituacao,
  buscar,
  listar,
} from "./gerenciador-tarefa";
import { SituacaoTarefa } from "./situacao-tarefa";

adicionar({
  id: 10,
  descricao: "Comprar roupa",
  situacao: SituacaoTarefa.PENDENTE,
});
adicionar({
  id: 25,
  descricao: "Almoçar",
  situacao: SituacaoTarefa.PENDENTE,
});
adicionar({
  id: 35,
  descricao: "Dar aula",
  situacao: SituacaoTarefa.PENDENTE,
});

// console.log(buscar(35));
// console.log(buscar(2121));
// console.log(listar([2112]));

alterarSituacao(35, SituacaoTarefa.CONCLUIDA);
console.log(buscar(35));
