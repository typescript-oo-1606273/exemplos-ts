import { EtapaPedido } from "./EtapaPedido";
import { GerenciadorPedido } from "./GerenciadorPedido";
import { ItemPedido } from "./ItemPedido";
import { Pedido } from "./Pedido";

const computador = new ItemPedido("Computador", 3000);
const geladeira = new ItemPedido("Geladeira", 4000);
const mochila = new ItemPedido("Mochila", 100);
const videoGame = new ItemPedido("Video Game", 2000);

const gerenciador = new GerenciadorPedido();

gerenciador.adicionar(new Pedido(1, "Igor", [computador, mochila]));
gerenciador.adicionar(new Pedido(2, "Wagner", [geladeira]));
gerenciador.adicionar(new Pedido(3, "Wagner", [geladeira]));
gerenciador.adicionar(new Pedido(4, "Giulliano", [videoGame]));

const pedido1 = gerenciador.buscar(1);
const pedido2 = gerenciador.buscar(2);
const pedido3 = gerenciador.buscar(3);
const pedido4 = gerenciador.buscar(4);

pedido1.alterarStatus(EtapaPedido.ENTREGUE);
pedido2.alterarStatus(EtapaPedido.ENVIDADO);
pedido3.alterarStatus(EtapaPedido.PROCESSANDO);
pedido4.alterarStatus(EtapaPedido.PENDENTE);

console.log(pedido1.exibeDados());
console.log(pedido2.exibeDados());
console.log(pedido3.exibeDados());
console.log(pedido4.exibeDados());
