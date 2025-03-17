# **Exercício: Sistema de Pagamento com Interfaces**

## **Objetivo**

Criar um sistema que gerencie diferentes formas de pagamento utilizando **interfaces** em TypeScript.

---

## **Instruções**

### **1. Criar uma interface `MetodoDePagamento`**

A interface `MetodoDePagamento` deve definir um contrato para diferentes formas de pagamento. Ela deve ter:

- `nome: string` (nome do método de pagamento)
- `pagar(valor: number): void` (método para processar o pagamento)

---

### **2. Implementar três classes que seguem essa interface:**

#### **Pix**

- O pagamento via **Pix** deve exibir a mensagem `"Pagamento de R$X realizado via Pix."`.

#### **Cartão de Crédito**

- O pagamento via **Cartão de Crédito** deve exibir a mensagem `"Pagamento de R$X realizado com Cartão de Crédito."`.

#### **Boleto Bancário**

- O pagamento via **Boleto Bancário** deve simular a emissão de um boleto.
- Exibir a mensagem `"Boleto gerado no valor de R$X. Aguarde a compensação."`.

---

### **3. Criar uma Função que Processa Pagamentos**

- Criar uma função que recebe um **método de pagamento** e um **valor**.
- A função deve exibir qual método está sendo usado e chamar o método `pagar()`.

---

### **4. Testar o Sistema**

- Criar instâncias de **Pix**, **Cartão de Crédito** e **Boleto Bancário**.
- Chamar a função de processamento de pagamento para cada um dos métodos, passando diferentes valores.

---
