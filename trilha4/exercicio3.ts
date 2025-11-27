// 1. Definição da Interface
/**
 * Interface ProdutoLoja: Define o contrato básico para um item da loja.
 */
interface ProdutoLoja {
    codigo: number; // Chave de busca única
    nome: string;
    // Poderíamos adicionar mais propriedades aqui, como 'preco', 'estoque', etc.
}

// 2. Definição da Classe Principal
/**
 * Classe Loja: Gerencia um catálogo de produtos que implementam ProdutoLoja.
 */
class Loja {
    // Array interno que armazena objetos que seguem a estrutura de ProdutoLoja.
    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
        // Inicializa a loja com alguns produtos de exemplo
        this.adicionarProduto({ codigo: 1001, nome: "Mouse Gamer RGB" });
        this.adicionarProduto({ codigo: 1002, nome: "Teclado Mecânico" });
        this.adicionarProduto({ codigo: 1003, nome: "Monitor Ultrawide" });
    }

    /**
     * Adiciona um novo produto ao array interno.
     */
    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
        console.log(`[Loja] Adicionado: ${produto.nome} (Cód: ${produto.codigo})`);
    }

    /**
     * Busca um produto no array pelo seu código.
     * @param codigo O código numérico do produto a ser buscado.
     * @returns O objeto ProdutoLoja correspondente ou undefined se não for encontrado.
     */
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        // Usa o método 'find' do JavaScript para buscar o primeiro item
        // que satisfaça a condição (produto.codigo === codigo).
        const produtoEncontrado = this.produtos.find(produto => produto.codigo === codigo);
        
        // Retorna o produto encontrado (ou undefined)
        return produtoEncontrado;
    }
}

// 3. Criação de Instância e Demonstração
console.log("\n--- Gerenciando a Loja ---");
const minhaLoja = new Loja();

// 4. Teste de Busca
console.log("\n--- Teste de Busca por Código ---");

const codigoExistente = 1002;
const produto1 = minhaLoja.buscarProdutoPorCodigo(codigoExistente);

if (produto1) {
    console.log(`✅ Produto encontrado para o código ${codigoExistente}: ${produto1.nome}`);
} else {
    console.log(`❌ Produto não encontrado para o código ${codigoExistente}.`);
}

const codigoInexistente = 9999;
const produto2 = minhaLoja.buscarProdutoPorCodigo(codigoInexistente);

if (produto2) {
    console.log(`✅ Produto encontrado para o código ${codigoInexistente}: ${produto2.nome}`);
} else {
    console.log(`❌ Produto não encontrado para o código ${codigoInexistente}.`);
}