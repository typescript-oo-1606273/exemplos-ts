import { EtapaPedido } from "./EtapaPedido";
import { ItemPedido } from "./ItemPedido";

export class Pedido {
  /**
   * Cada pedido precisa de um ID único, o nome do cliente, os itens comprados e o status.
Cada item do pedido é composto por um nome e um valor.
O valor total do pedido é igual a soma do valor de cada item do pedido.
Lembre-se de começar o pedido sempre com o status "Pendente".
   */

  private id: number;
  private nomeCliente: string;
  private items: Array<ItemPedido>;
  private status: EtapaPedido;

  constructor(id: number, nomeCliente: string, items: Array<any>) {
    this.id = id;
    this.nomeCliente = nomeCliente;
    this.items = items;
    this.status = EtapaPedido.PENDENTE;
  }

  alterarStatus(novoStatus: EtapaPedido) {
    this.status = novoStatus;
  }

  obterId() {
    return this.id;
  }

  obterNomeCliente() {
    return this.nomeCliente;
  }

  obterItems() {
    return this.items;
  }

  obterStatus() {
    return this.status;
  }

  obterValorTotal() {
    let valorTotal: number = 0;

    this.items.forEach((item) => {
      valorTotal = valorTotal + item.obterValor();
    });

    return valorTotal;
  }

  exibeDados() {
    return `Pedido ${this.id} para o cliente ${this.nomeCliente} está 
      com o status ${this.status} e 
      tem valor total ${this.obterValorTotal()}
      e possui ${this.items.length}`;
  }
}
