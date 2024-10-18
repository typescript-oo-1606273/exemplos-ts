/**
 * São uma forma de lidar com erros utilizando Javascript/Typescript
 * Eles interrompem a execução do código e podem ser pegos utilizando try e catch
 */

try {
  console.log('Fiz alguma coisa');
  const objeto: any = { nome: "Jeff" }
  
} catch (error) {
  const meuErro = error as Error;
  console.log(meuErro.stack);
}


// const objeto: any = { nome: "Jeff" }
// objeto.algo.naoexiste

// throw "Deu um erro";
// throw new Error('Idade deve ser maior que 18 anos.');
// Criando classes de erro customizada
