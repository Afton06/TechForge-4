class Produto {
    // Atributos privados para encapsulamento
    private nome: string;
    private preco: number; // Preço unitário
    private quantidade: number; // Quantidade em estoque

    /**
     * Construtor da classe Produto.
     * @param nome O nome do produto.
     * @param preco O preço unitário do produto.
     * @param quantidade A quantidade inicial em estoque.
     */
    constructor(nome: string, preco: number, quantidade: number) {
        // Validação básica para garantir valores válidos
        this.nome = nome;
        this.preco = Math.max(0, preco); // Preço não pode ser negativo
        this.quantidade = Math.max(0, quantidade); // Quantidade não pode ser negativa
    }

    // --- Métodos Getters ---

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    // --- Método Principal ---

    /**
     * Calcula o valor monetário total do estoque deste produto.
     * Fórmula: Preço Unitário * Quantidade em Estoque.
     * @returns O valor total em estoque como um número.
     */
    public calcularValorTotalEstoque(): number {
        // Retorna o resultado da multiplicação entre preço e quantidade
        return this.preco * this.quantidade;
    }

    // --- Métodos de Utilidade (Opcionais) ---

    /**
     * Adiciona itens ao estoque.
     * @param unidades Número de unidades a adicionar.
     */
    public adicionarEstoque(unidades: number): string {
        if (unidades > 0) {
            this.quantidade += unidades;
            return `${unidades} unidades de ${this.nome} adicionadas. Novo estoque: ${this.quantidade}.`;
        }
        return "Erro: A quantidade a adicionar deve ser positiva.";
    }

    /**
     * Remove itens do estoque (venda).
     * @param unidades Número de unidades a remover.
     */
    public removerEstoque(unidades: number): string {
        if (unidades <= 0) {
            return "Erro: A quantidade a remover deve ser positiva.";
        }
        if (this.quantidade >= unidades) {
            this.quantidade -= unidades;
            return `${unidades} unidades de ${this.nome} removidas. Estoque restante: ${this.quantidade}.`;
        }
        return `Erro: Estoque insuficiente. Apenas ${this.quantidade} unidades de ${this.nome} disponíveis.`;
    }
}

// --- Exemplo de Uso ---

// 1. Criar instâncias de produtos
const notebook = new Produto("Notebook Gamer X1", 4500.00, 15);
const mouse = new Produto("Mouse Óptico", 49.90, 100);

console.log("--- Detalhes e Cálculo do Notebook ---");
console.log(`Produto: ${notebook.getNome()}`);
console.log(`Preço Unitário: R$${notebook.getPreco().toFixed(2)}`);
console.log(`Quantidade em Estoque: ${notebook.getQuantidade()} unidades`);

let valorTotalNotebook = notebook.calcularValorTotalEstoque();
console.log(`Valor Total em Estoque: R$${valorTotalNotebook.toFixed(2)}`);
// Cálculo: 4500.00 * 15 = 67500.00

console.log("\n--- Detalhes e Cálculo do Mouse ---");
console.log(`Produto: ${mouse.getNome()}`);
console.log(`Quantidade em Estoque: ${mouse.getQuantidade()} unidades`);

let valorTotalMouse = mouse.calcularValorTotalEstoque();
console.log(`Valor Total em Estoque: R$${valorTotalMouse.toFixed(2)}`);
// Cálculo: 49.90 * 100 = 4990.00

// 2. Testando a adição e remoção de estoque
console.log("\n--- Movimentação de Estoque ---");
console.log(notebook.removerEstoque(5));
console.log(`Novo Valor Total em Estoque: R$${notebook.calcularValorTotalEstoque().toFixed(2)}`);

console.log(mouse.adicionarEstoque(50));
console.log(`Novo Valor Total em Estoque: R$${mouse.calcularValorTotalEstoque().toFixed(2)}`);