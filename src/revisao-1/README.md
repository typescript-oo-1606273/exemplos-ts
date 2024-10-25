# Exercício: Controle de Pedidos Simples

**Objetivo**: Criar um sistema básico para gerenciar pedidos de uma loja, onde você vai registrar, atualizar e exibir informações dos pedidos.

---

## Cenário:

Você precisa montar um sistema para organizar os pedidos de uma loja. Cada pedido passa por diferentes etapas, como "Pendente", "Processando", "Enviado" e "Entregue". O sistema deve permitir criar pedidos, mudar o status deles e mostrar os detalhes de cada um.

## Instruções:

1. **Crie uma estrutura para os status**:

   - Pense nas fases que um pedido passa, como "Pendente", "Processando", "Enviado" e "Entregue".
   - Esses status devem ser valores fixos que o sistema vai usar.

2. **Defina o que um pedido contém**:

   - Cada pedido precisa de um **ID** único, o **nome do cliente**, os **itens comprados** e o **status**.
   - Cada item do pedido é composto por um **nome** e um **valor**.
   - O valor total do pedido é igual a soma do valor de cada item do pedido.
   - Lembre-se de começar o pedido sempre com o status "Pendente".

3. **Atualize o status do pedido**:

   - Crie uma maneira de mudar o status de um pedido, por exemplo, de "Pendente" para "Processando" ou "Enviado".

4. **Exiba as informações do pedido**:
   - Mostre os detalhes do pedido, como o nome do cliente, os itens comprados, o valor total e o status atual, de forma organizada e fácil de entender.
