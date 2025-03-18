export interface MetodoPagamento {
  nome: string;
  pagar(valor: number): void;
}
