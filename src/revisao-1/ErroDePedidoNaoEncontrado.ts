export class ErroDePedidoNaoEncontrado extends Error {
  constructor() {
    super("Pedido não encontrado");
  }
}
