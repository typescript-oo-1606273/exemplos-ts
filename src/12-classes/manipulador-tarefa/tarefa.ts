import { SituacaoTarefa } from "./situacao-tarefa";

export class Tarefa {
  public readonly id: number;
  public readonly descricao: string;
  public readonly observacoes?: string;
  private situacao: SituacaoTarefa;

  constructor(id: number, descricao: string, situacao: SituacaoTarefa, observacoes?: string) {
    this.id = id;
    this.descricao = descricao;
    this.situacao = situacao;
    this.observacoes = observacoes;
  }

  setSituacao(situacao: SituacaoTarefa) {
    this.situacao = situacao;
  }
}