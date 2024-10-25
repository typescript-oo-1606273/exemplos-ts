# Exercício: Sistema de Conta Bancária

**Objetivo**: Criar um sistema simples que gerencie diferentes tipos de contas bancárias: Conta Corrente e Conta Poupança.

---

## Cenário:

Você vai criar um sistema para gerenciar contas bancárias. Existem dois tipos de conta: **Conta Corrente** e **Conta Poupança**. Elas compartilham algumas funcionalidades, mas têm diferenças importantes.

## Instruções:

1. **Estrutura Básica da Conta**:

   - Toda conta tem um **número**, o **nome do titular**, e um **saldo**.
   - A conta deve permitir **depositar**, **sacar** e **ver o saldo**.

2. **Conta Corrente**:

   - A **Conta Corrente** tem um **limite de cheque especial**, permitindo sacar além do saldo, até um valor limite.

3. **Conta Poupança**:

   - A **Conta Poupança** tem um **rendimento mensal**, que aumenta o saldo de acordo com uma taxa de juros.

4. **Operações**:

   - Para a Conta Corrente, o saque pode usar o limite do cheque especial.
   - Para a Conta Poupança, aplique o rendimento mensal ao saldo.

5. **Teste no Sistema**:
   - Crie uma Conta Corrente e uma Conta Poupança.
   - Faça operações de **depósito**, **saque** e aplique o **rendimento** na poupança.
   - Mostre o saldo final de cada conta.
