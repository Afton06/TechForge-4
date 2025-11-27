// Tipagem para um objeto onde as chaves são strings (nomes dos itens)
// e os valores são números (quantidades).
type ItemRecord = Record<string, number>;

/**
 * Classe abstrata que define os métodos obrigatórios para qualquer inventário.
 */
abstract class Inventory {
    // Objeto protegido que armazena o inventário real.
    protected inventory: ItemRecord = {};

    /**
     * Adiciona um item ao inventário com uma quantidade específica.
     */
    abstract addItem(item: string, quantity: number): void;

    /**
     * Remove um item do inventário (setando sua quantidade para 0 ou removendo a chave).
     */
    abstract removeItem(item: string): void;

    /**
     * Retorna a representação atual do inventário (item: quantidade).
     */
    abstract getInventory(): ItemRecord;

    /**
     * Método auxiliar para imprimir o status.
     */
    protected printStatus(type: string, action: string, item: string, quantity: number, current: number): void {
        console.log(`[${type}] ${action} ${quantity}x "${item}". Estoque atual: ${current}`);
    }
}