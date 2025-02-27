/** Crie um dicionário que mapeie os códigos de três alunos (chaves do tipo number) para seus respectivos nomes (valores do tipo string). */

let alunos: Record<number, string>;
alunos = {
  1005: "Helen",
  2212: "Fernando",
  3213: "Luiz",
  4354: "João",
};
// console.log(alunos[3213], alunos[4354], alunos[1005]);

/** Crie um dicionário que mapeie um idiomas para os valores do respectivo idioma. */
enum Idioma {
  PORTUGUES = "pt",
  INGLES = "in",
  ESPANHOL = "es",
}

type ItemDicionario = Record<Idioma, string>;
let item: ItemDicionario = {
  in: "Learn",
  pt: "Aprender",
  es: "Aprender",
};
type Dicionario = Record<string, ItemDicionario>;

const dicionario: Dicionario = {
  targettrust: {
    es: "Targettrust",
    pt: "Targettrust",
    in: "Targettrust",
  },
};

/** Crie uma lista de status semelhante a um enum (PENDENTE, ENVIADO, ENTREGUE) */
let statusPedido: Record<string, number> = {
  PENDENTE: 1,
  ENVIDADO: 2,
  ENTREGUE: 3,
};
statusPedido["NAO_ENVIADO"] = 4;
statusPedido.NAO_ENVIADO = 4;
statusPedido.NAO_ENVIADO = 5;
statusPedido.NAO_ENVIADO = 7;
console.log(statusPedido.NAO_EXISTE);

enum StatusPedido {
  PENDENTE = 1,
  ENVIADO = 2,
  ENTREGUE = 3,
}

// console.log(statusPedido);

export {};
