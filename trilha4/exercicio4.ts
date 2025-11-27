// 1. Definição da Interface
/**
 * Interface Livro: Define o contrato para um item no acervo da biblioteca.
 */
interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean; // Indica se o livro está disponível para empréstimo
}

// 2. Definição da Classe Principal
/**
 * Classe Biblioteca: Gerencia o acervo de livros.
 */
class Biblioteca {
    // Array de livros, tipado pela interface Livro.
    private acervo: Livro[];

    constructor() {
        this.acervo = [];
        // Inicializa o acervo com alguns livros de exemplo
        this.adicionarLivro({ titulo: "A Arte da Guerra", autor: "Sun Tzu", disponivel: true });
        this.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
        this.adicionarLivro({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true });
        this.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
    }

    /**
     * Adiciona um novo livro ao acervo.
     */
    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    /**
     * Retorna um array contendo apenas os livros que estão disponíveis.
     * @returns Um array de objetos Livro onde 'disponivel' é true.
     */
    buscarLivrosDisponiveis(): Livro[] {
        // O método 'filter' do JavaScript cria um novo array
        // contendo todos os elementos que passam no teste (livro.disponivel === true).
        return this.acervo.filter(livro => livro.disponivel === true);
    }

    /**
     * Método auxiliar para listar todos os livros.
     */
    listarTodoAcervo(): void {
        console.log("\n--- ACERVO COMPLETO ---");
        this.acervo.forEach(livro => {
            const status = livro.disponivel ? "✅ Disponível" : "❌ Emprestado";
            console.log(`[${status}] ${livro.titulo} - ${livro.autor}`);
        });
    }
}

// 3. Criação de Instância e Demonstração
const minhaBiblioteca = new Biblioteca();

// Listar o acervo completo para referência
minhaBiblioteca.listarTodoAcervo();

// 4. Chamada da Função Principal
console.log("\n--- LIVROS DISPONÍVEIS PARA EMPRÉSTIMO ---");
const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();

if (livrosDisponiveis.length > 0) {
    livrosDisponiveis.forEach(livro => {
        console.log(`✅ ${livro.titulo} por ${livro.autor}`);
    });
    console.log(`\nTotal de livros disponíveis: ${livrosDisponiveis.length}`);
} else {
    console.log("Nenhum livro disponível no momento.");
}