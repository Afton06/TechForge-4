class Agenda {
    // Atributo privado que armazena os compromissos como um array de strings.
    private compromissos: string[];

    /**
     * Construtor da classe Agenda. Inicializa o array de compromissos.
     */
    constructor() {
        this.compromissos = []; // Inicializa a agenda vazia
    }

    /**
     * Adiciona um novo compromisso à lista.
     * @param compromisso A string que descreve o compromisso.
     * @returns Uma mensagem de status da operação.
     */
    public adicionarCompromisso(compromisso: string): string {
        // Validação: garante que o compromisso não seja uma string vazia
        if (compromisso && compromisso.trim().length > 0) {
            this.compromissos.push(compromisso.trim());
            return `Sucesso: Compromisso adicionado: "${compromisso.trim()}"`;
        } else {
            return "Erro: O compromisso não pode ser vazio.";
        }
    }

    /**
     * Lista e retorna todos os compromissos agendados.
     * @returns Um array de strings contendo todos os compromissos.
     */
    public listarCompromissos(): string[] {
        if (this.compromissos.length === 0) {
            console.log("A agenda está vazia. Não há compromissos agendados.");
            return [];
        }

        console.log("\n--- Lista de Compromissos Agendados ---");
        this.compromissos.forEach((comp, index) => {
            console.log(`[${index + 1}] ${comp}`);
        });

        return this.compromissos;
    }

    /**
     * Retorna a quantidade de compromissos na agenda.
     */
    public getNumeroCompromissos(): number {
        return this.compromissos.length;
    }
}

// --- Exemplo de Uso da Classe Agenda ---

const minhaAgenda = new Agenda();

// 1. Adicionando compromissos
console.log(minhaAgenda.adicionarCompromisso("Revisar código do projeto 1 às 9h"));
console.log(minhaAgenda.adicionarCompromisso("Almoço com o cliente (Restaurante Central)"));
console.log(minhaAgenda.adicionarCompromisso("Academia às 18:30"));

// 2. Listando todos os compromissos
minhaAgenda.listarCompromissos();
console.log(`\nTotal de itens na agenda: ${minhaAgenda.getNumeroCompromissos()}`); // Saída: 3

// 3. Adicionando mais um compromisso e listando novamente
console.log("\n" + minhaAgenda.adicionarCompromisso("Preparar apresentação para amanhã"));
minhaAgenda.listarCompromissos();
console.log(`\nTotal de itens na agenda: ${minhaAgenda.getNumeroCompromissos()}`); // Saída: 4