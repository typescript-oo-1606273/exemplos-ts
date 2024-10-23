import { Caneta } from "./Caneta";
import { Carro } from "./Carro";
import { Cores } from "./Cor";
import { Liquidificador } from "./Liquidificador";
import { Produto } from "./Produto";

const produtos: Produto[] = [];

produtos.push(new Carro("Chevrolet", "Corsa", Cores.VERDE, 2.0));
produtos.push(new Caneta(Cores.PRETO, "Big", "Esferográfica"));
produtos.push(new Liquidificador());

console.log(produtos[0]);