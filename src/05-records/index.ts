/** Crie um dicionário que mapeie os códigos de três alunos (chaves do tipo number) para seus respectivos nomes (valores do tipo string). */

//Dicionário
const alunos: Record<number, string> = {
  101: "João Silva",
  102: "Maria Oliveira",
  103: "Pedro Santos",
  104: "Ana Paula",
  105: "Lucas Almeida"
};

type DicionarioPessoas = {
  [key: number]: string
}
const pessoas: DicionarioPessoas = {
  101: "João Silva",
  102: "Maria Oliveira",
  103: "Pedro Santos",
  104: "Ana Paula",
  105: "Lucas Almeida"
};


