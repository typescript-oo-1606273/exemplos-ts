import { SituacaoTarefa } from "./situacao-tarefa";

export type Tarefa = {
  id: number;
  descricao: string;
  situacao: SituacaoTarefa;
  observacoes?: string;
};
