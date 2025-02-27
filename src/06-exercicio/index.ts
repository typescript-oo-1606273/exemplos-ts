/**
 * # Exercício: Classificação de Idades

## Objetivo

Criar um programa simples que classifique uma pessoa de acordo com sua idade, 
utilizando conceitos básicos de TypeScript, como tipos primitivos, type aliases, enums e funções.

## Instruções

1. **Criar um Enum para as Faixas Etárias**

   - Defina um `enum` chamado `CategoriaIdade` com os seguintes valores:
     - `CRIANCA` (0 a 12 anos)
     - `ADOLESCENTE` (13 a 17 anos)
     - `ADULTO` (18 a 64 anos)
     - `IDOSO` (65 anos ou mais)

2. **Criar um Tipo para Representar uma Pessoa**

   - Defina um `type` chamado `Pessoa`, contendo:
     - `nome`: string
     - `idade`: number

3. **Criar uma Função para Classificar a Idade**

   - Crie uma função que receba um objeto do tipo `Pessoa` e retorne a categoria correspondente da idade.

4. **Testar o Programa**
   - Crie algumas pessoas de diferentes idades e exiba a classificação no console.

*/

enum FaixaEtaria {
  CRIANCA = 0,
  ADOLESCENTE = 1,
  ADULTO = 2,
  IDOSO = 3,
}

type SerHumano = {
  nome: string;
  idade: number;
};

function classificarIdade(pessoa: SerHumano): FaixaEtaria {
  if (pessoa.idade >= 0 && pessoa.idade <= 12) {
    return FaixaEtaria.CRIANCA;
  } else if (pessoa.idade >= 13 && pessoa.idade <= 17) {
    return FaixaEtaria.ADOLESCENTE;
  } else if (pessoa.idade >= 18 && pessoa.idade <= 64) {
    return FaixaEtaria.ADULTO;
  } else {
    return FaixaEtaria.IDOSO;
  }
}

function mostrarFaixaEtaria(faixaEtaria: FaixaEtaria): string {
  if (faixaEtaria == FaixaEtaria.ADOLESCENTE) {
    return "Adolescente";
  }
  if (faixaEtaria == FaixaEtaria.ADULTO) {
    return "Adulto";
  }
  if (faixaEtaria == FaixaEtaria.CRIANCA) {
    return "Criança";
  }
  if (faixaEtaria == FaixaEtaria.IDOSO) {
    return "Idoso";
  }

  return "Indeterminado";
}

const pessoas: SerHumano[] = [
  {
    nome: "Maria",
    idade: 35, //ADULTO
  },
  {
    nome: "João",
    idade: 16, //ADOLESCENTE
  },
  {
    nome: "Enzo",
    idade: 9, //CRIANÇA
  },
  {
    nome: "Leomar",
    idade: 87, //IDOSO
  },
];

for (const pessoa of pessoas) {
  const faixaEtaria = classificarIdade(pessoa);
  const descricaoFaixaEtaria = mostrarFaixaEtaria(faixaEtaria);

  console.log(
    `Meu nome é ${pessoa.nome}, minha idade é ${pessoa.idade} e eu sou uma ${descricaoFaixaEtaria}`
  );
}
