//Cada pedido precisa de um **ID** único, o **nome do cliente**, os **itens comprados** e o **status**.

import { Cliente } from "./Cliente";
import { EtapaPedido } from "./EtapaPedido";
import { ItemPedido } from "./ItemPedido";

export class Pedido {
  private id: number;
  private cliente: Cliente;
  private status: EtapaPedido;
  private itens: ItemPedido[];

  constructor(
    id: number,
    cliente: Cliente,
    itens: ItemPedido[],
  ) {
    this.id = id;
    this.cliente = cliente;
    this.itens = itens;
    this.status = EtapaPedido.Pendente;
  }

  enviar() {
    this.status = EtapaPedido.Enviado;
  }

  processar() {
    if(this.status !== EtapaPedido.Entregue) {
      this.status = EtapaPedido.Processando;
    }
  }

  entregar() {
    this.status = EtapaPedido.Entregue;
  }

  calcularTotal() {
    let soma = 0;

    this.itens.forEach(item => soma += item.valor);

    return soma;
  }

  mostrarInformacoes() {
    const infoPedidos = this.itens.map(item => item.mostrarInformacoes());
    return `Pedido Nº ${this.id} de ${this.cliente.nome} com status ${this.status} - Valor R$ ${this.calcularTotal()} ${infoPedidos.join(", ")}`;
  }
}

