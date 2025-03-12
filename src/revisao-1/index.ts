import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";
import { Pedido } from "./Pedido";

const clienteHelen = new Cliente("Helen");
const clienteFernando = new Cliente("Fernando");

const itemPedido1 = [new ItemPedido("Celular", 3000)];
const pedido1 = new Pedido(1, clienteHelen, itemPedido1);

const itensPedido2 = [
  new ItemPedido("Computador", 3000),
  new ItemPedido("Geladeira", 5000),
  new ItemPedido("Microondas", 600),
];
const pedido2 = new Pedido(2, clienteFernando, itensPedido2);

pedido1.processar();
pedido2.entregar();

// console.log(pedido1.calcularTotal());
// console.log(pedido2.calcularTotal());
// console.log(pedido1, pedido2);

console.log(pedido1.mostrarInformacoes());
console.log(pedido2.mostrarInformacoes());