class Livro {
    // Atributos
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    /**
     * Construtor da classe Livro.
     * @param titulo O título do livro.
     * @param autor O autor do livro.
     * @param paginas O número total de páginas.
     * @param lido Indica se o livro já foi lido (opcional, padrão é false).
     */
    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    // Métodos Getters para acessar os atributos
    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getPaginas(): number {
        return this.paginas;
    }

    public isLido(): boolean {
        return this.lido;
    }

    /**
     * Marca o livro como lido.
     * @returns Uma mensagem de confirmação.
     */
    public marcarComoLido(): string {
        if (this.lido) {
            return `O livro "${this.titulo}" já estava marcado como lido.`;
        } else {
            this.lido = true;
            return `O livro "${this.titulo}" foi marcado como lido com sucesso.`;
        }
    }

    /**
     * Retorna um resumo do estado atual do livro.
     */
    public obterStatus(): string {
        const status = this.lido ? "LIDO" : "NÃO LIDO";
        return `"${this.titulo}", escrito por ${this.autor} (${this.paginas} páginas). Status: ${status}.`;
    }
}