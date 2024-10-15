type RetornoOperacao<T> = {
  sucesso: boolean;
  dados?: T;
  erro?: string;
};

function validarDados<T>(dados: T): RetornoOperacao<T> {
  return {
      sucesso: true,
      dados: dados,
  };
}

const resultado1 = validarDados({ nome: "João", idade: 30 });