# **Exercício: Biblioteca de Mídia**

## **Objetivo**

Criar um sistema para gerenciar diferentes tipos de mídias (livros, filmes e músicas) usando **interfaces** para garantir que todas sigam um mesmo padrão.

---

## **Instruções**

### 1. Criar uma interface `Midia`

A interface `Midia` deve definir:

- `titulo: string`
- `ano: number`
- `exibirInfo(): string` (método que retorna uma string com as informações da mídia)

### 2. Implementar três classes diferentes que seguem essa interface:

- **`Livro`**: deve ter um **autor** e um método `exibirInfo()` que retorna:  
  `"Título: X, Autor: Y, Ano: Z"`
- **`Filme`**: deve ter um **diretor** e um método `exibirInfo()` que retorna:  
  `"Título: X, Diretor: Y, Ano: Z"`
- **`Musica`**: deve ter um **artista** e um método `exibirInfo()` que retorna:  
  `"Título: X, Artista: Y, Ano: Z"`

### 3. Criar uma função que recebe um array de `Midia` e exibe as informações de cada uma.

### 4. Testar o sistema:

- Criar instâncias de `Livro`, `Filme` e `Musica`.
- Colocar todas em um array e exibir as informações chamando a função.

---

## **Exemplo de Saída Esperada**

```plaintext
Título: O Senhor dos Anéis, Autor: J.R.R. Tolkien, Ano: 1954
Título: Matrix, Diretor: Wachowski, Ano: 1999
Título: Bohemian Rhapsody, Artista: Queen, Ano: 1975
```
