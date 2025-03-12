export class ItemPedido {
  nome: string;
  valor: number;

  constructor(parametroNome: string, parametroValor: number) {
    this.nome = parametroNome;
    this.valor = parametroValor;
  }

  mostrarInformacoes() {
    return `Item ${this.nome} - Valor R$ ${this.valor}`;
  }
}