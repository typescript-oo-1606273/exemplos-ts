//Cada item do pedido é composto por um nome e um valor.
export class ItemPedido {
  private nome: string;
  private valor: number;

  constructor(nome: string, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  obterNome() {
    return this.nome;
  }

  obterValor() {
    return this.valor;
  }
}
