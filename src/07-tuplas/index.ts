/**  
 * Defina uma tupla que represente um livro com seu título (do tipo string) e ano de publicação (do tipo number).
   Crie uma lista (array) de tuplas para armazenar informações de três livros.
   Acesse e exiba o título de um livro utilizando seu índice na lista.
   Adicione uma nova tupla para um novo livro e exiba as informações desse livro no console.
   Itere sobre a lista de livros e exiba todos os títulos e anos de publicação.

   Crie uma função chamada useState que retorna uma tupla
*/

const livro = ['Código Limpo', 2010];
const [titulo, ano] = livro; //Destructuring

// const [valor, setValor] = useState("10");

//Outros exemplos de Destructuring
const aluno = {
  nome: 'Igor',
  idade: 29,
}
const { 
  nome: meuNome,
  idade: minhaIdade,
} = aluno;
console.log(meuNome, minhaIdade);
