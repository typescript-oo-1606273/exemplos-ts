import { ErroDePedidoNaoEncontrado } from "./ErroDePedidoNaoEncontrado";
import { Pedido } from "./Pedido";

export class GerenciadorPedido {
  private pedidos: Pedido[];

  constructor() {
    this.pedidos = [];
  }

  adicionar(pedido: Pedido) {
    this.pedidos.push(pedido);
  }

  listar() {
    return this.pedidos;
  }

  buscar(id: number) {
    const pedidoEncontrado = this.pedidos.find((pedido) => {
      return id == pedido.obterId();
    });

    if (!pedidoEncontrado) {
      throw new ErroDePedidoNaoEncontrado();
    }

    return pedidoEncontrado;
  }
}
