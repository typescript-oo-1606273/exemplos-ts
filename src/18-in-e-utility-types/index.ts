//Verificando se um objeto possui uma propriedade usando "in"

const endereco = {
  rua: "Rua qualquer",
  bairro: "Centro",
  cidade: "Porto Alegre",
  complemento: {
    local: "Perto da rua tal",
  },
};

const dicionario = {
  1: "Jeff",
  2: "João",
  3: "Pedro",
};

if ("cidade" in endereco) {
  console.log("Tem cidade");
}

if (1 in dicionario) {
  console.log("Tem o registro com o id 1");
}

const pessoa = {
  nome: "Jeff",
  endereco: endereco,
};

if ("bairro" in pessoa.endereco) {
  console.log("Tem cidade");
}
//nested objects

//Utility Types

//Partial<T>

class Usuario {
  id: number;
  nome: string;
  idade: number;
  email: string;

  constructor(id: number, nome: string, idade: number, email: string) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

const meuUsuario: Partial<Usuario> = {
  id: 10,
  nome: "Jeff",
  email: "jeff@google.com",
  idade: 29,
};

//Pick<T, "prop1" | "prop2" | "propN">

interface Produto {
  id: number;
  nome: string;
  marca: string;
  modelo?: string;
}

type ProdutoSemNome = Pick<Produto, "id" | "marca" | "modelo">;

const meuProdutoSemNome: ProdutoSemNome = {
  id: 123,
  marca: "Bic",
  modelo: "Esferográfica",
};

//Omit<T, "prop1" | "prop2", "propN">

const meuNovoProduto: Omit<Produto, "id"> = {
  marca: "QUalquer",
  modelo: "Qualquer modelo",
  nome: "Nome do produto",
};
