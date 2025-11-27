// 1. Definição da Interface
/**
 * Interface LivroBiblioteca: Define o contrato completo para um livro no sistema.
 */
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean; // true se puder ser emprestado
}

// 2. Definição da Classe de Gestão
class BibliotecaGestao {
    // Array tipado que armazena os livros.
    private acervo: LivroBiblioteca[];

    constructor() {
        this.acervo = [
            // Dados de exemplo
            { titulo: "O Tempo e o Vento", autor: "Erico Verissimo", genero: "Ficção Histórica", disponivel: true },
            { titulo: "Capitães da Areia", autor: "Jorge Amado", genero: "Ficção Social", disponivel: false },
            { titulo: "Memórias Póstumas", autor: "Machado de Assis", genero: "Romance", disponivel: true },
            { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: false },
            { titulo: "A Casa dos Espíritos", autor: "Isabel Allende", genero: "Ficção Histórica", disponivel: true },
        ];
    }

    /**
     * Filtra o acervo e retorna apenas os livros que correspondem ao gênero.
     * @param genero O gênero a ser buscado (comparação case-insensitive).
     * @returns Array de LivroBiblioteca.
     */
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        const generoBusca = genero.toLowerCase();
        
        // Usa filter para criar um novo array com base na condição
        return this.acervo.filter(livro => livro.genero.toLowerCase() === generoBusca);
    }

    /**
     * Busca e retorna todos os livros escritos por um autor específico.
     * @param autor O nome do autor a ser buscado (comparação case-insensitive).
     * @returns Array de LivroBiblioteca.
     */
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        const autorBusca = autor.toLowerCase();
        
        // Usa filter para criar um novo array com base na condição
        return this.acervo.filter(livro => livro.autor.toLowerCase() === autorBusca);
    }

    /**
     * Retorna todos os livros que estão disponíveis, ordenados alfabeticamente
     * pelo título.
     * @returns Array de LivroBiblioteca.
     */
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        // 1. Filtra: Obtém apenas os livros onde disponivel é true.
        const disponiveis = this.acervo.filter(livro => livro.disponivel);

        // 2. Ordena: Usa o método sort para ordenar o novo array
        // (LocaleCompare é usado para garantir a ordenação correta de strings, incluindo acentos).
        return disponiveis.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

// 3. Criação de Instância e Demonstração
const biblioteca = new BibliotecaGestao();
console.log("--- Sistema de Gestão de Biblioteca ---");

// --- 3.1. Filtrar por Gênero ---
console.log("\n1. LIVROS DE FICÇÃO HISTÓRICA:");
const ficcaoHistorica = biblioteca.filtrarPorGenero("Ficção Histórica");
ficcaoHistorica.forEach(l => console.log(`   - ${l.titulo} (Autor: ${l.autor})`));

// --- 3.2. Buscar por Autor ---
console.log("\n2. LIVROS DE MACHADO DE ASSIS:");
const machado = biblioteca.buscarPorAutor("Machado de Assis");
machado.forEach(l => console.log(`   - ${l.titulo} (Disponível: ${l.disponivel ? 'Sim' : 'Não'})`));

// --- 3.3. Livros Disponíveis Ordenados ---
console.log("\n3. LIVROS DISPONÍVEIS (ORDENADOS POR TÍTULO):");
const disponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();

if (disponiveisOrdenados.length > 0) {
    disponiveisOrdenados.forEach(l => console.log(`   - ${l.titulo} (${l.autor})`));
} else {
    console.log("   * Nenhum livro disponível no momento.");
}