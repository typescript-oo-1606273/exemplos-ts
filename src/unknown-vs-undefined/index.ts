
enum TipoPessoaEnum {
  PESSOA_FISICA = 0,
  PESSOA_JURIDICA = 1
}

type TypeTipoPessoa = {
  [key: string]: number
}
type TypeTipoPessoa2 = Record<string, number>;

const tiposDePessoa: TypeTipoPessoa2 = {
  PESSOA_FISICA: 0,
  PESSOA_JURIDICA: 1
}

const tipoPessoObjeto = {
  PESSOA_FISICA: 0,
  PESSOA_JURIDICA: 1
}

function criarPessoa(tipo: TipoPessoaEnum) {
  
}

tiposDePessoa.PESSOA_FISICA
TipoPessoaEnum.PESSOA_FISICA