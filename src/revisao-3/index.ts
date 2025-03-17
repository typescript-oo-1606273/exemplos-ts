import { Filme } from "./Filme";
import { Livro } from "./Livro";
import { Midia } from "./Midia";
import { Musica } from "./Musica";


const filme1 = new Filme("Esqueceram de Mim", "José da silva", 2000);
const livro = new Livro("Harry potter", "J.K. Rolling", 2000);
const musica = new Musica("Viver", 2020, "Autor qualquer");

const midias: Midia[] = [filme1, livro, musica];

console.log(midias[0].exibirInfo());