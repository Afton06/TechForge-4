class ContaBancaria {
    // Atributos
    private titular: string;
    private saldo: number;

    /**
     * Construtor da classe ContaBancaria.
     * @param titular O nome do titular da conta.
     * @param saldo O saldo inicial da conta (opcional, padrão é 0).
     */
    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        // Garantir que o saldo inicial seja não negativo.
        this.saldo = Math.max(0, saldo); 
    }

    /**
     * Retorna o nome do titular da conta.
     */
    public getTitular(): string {
        return this.titular;
    }

    /**
     * Retorna o saldo atual da conta.
     */
    public getSaldo(): number {
        return this.saldo;
    }

    /**
     * Deposita um valor na conta, aumentando o saldo.
     * @param valor O valor a ser depositado.
     * @returns Uma mensagem indicando o resultado da operação.
     */
    public depositar(valor: number): string {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}.`;
        } else {
            return "Erro: O valor do depósito deve ser positivo.";
        }
    }

    /**
     * Saca um valor da conta, diminuindo o saldo, se houver saldo suficiente.
     * @param valor O valor a ser sacado.
     * @returns Uma mensagem indicando o resultado da operação.
     */
    public sacar(valor: number): string {
        if (valor <= 0) {
            return "Erro: O valor do saque deve ser positivo.";
        }

        if (this.saldo >= valor) {
            this.saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}.`;
        } else {
            return `Erro: Saldo insuficiente. Saldo atual: R$${this.saldo.toFixed(2)}.`;
        }
    }
}