// 1. Definição da Interface
/**
 * Interface Produto: Define o contrato para qualquer objeto
 * que represente um produto na loja.
 */
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

// 2. Implementação da Classe
/**
 * Classe ItemLoja: Implementa a interface Produto, o que a obriga
 * a ter todas as propriedades especificadas (id, nome, preco).
 */
class ItemLoja implements Produto {
    // As propriedades da interface devem ser declaradas na classe.
    public id: number;
    public nome: string;
    public preco: number;

    /**
     * Construtor da classe que atribui valores às propriedades obrigatórias.
     */
    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        console.log(`Item "${this.nome}" (ID: ${this.id}) criado com sucesso.`);
    }

    // Você pode adicionar métodos específicos à classe, se necessário.
    exibirDetalhes(): void {
        console.log(`Detalhes: ID ${this.id}, Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// 3. Criação de Instâncias
console.log("--- Instanciação ---");
const livro = new ItemLoja(101, "A História de TypeScript", 89.90);
const caneta = new ItemLoja(102, "Caneta Gel Azul", 5.50);

// 4. Demonstração
console.log("\n--- Detalhes dos Itens ---");
livro.exibirDetalhes();
caneta.exibirDetalhes();

// O TypeScript reconhece que 'livro' é do tipo ItemLoja E do tipo Produto.
const itemGenerico: Produto = livro; 
console.log(`\nItem genérico (Produto): ${itemGenerico.nome}`);