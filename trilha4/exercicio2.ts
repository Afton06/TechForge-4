// 1. Definição da Interface
/**
 * Interface Documento: Define o contrato básico para qualquer objeto
 * que represente um documento (título e conteúdo).
 */
interface Documento {
    titulo: string;
    conteudo: string;
}

// 2. Implementação da Classe
/**
 * Classe Texto: Implementa a interface Documento, garantindo que
 * possua as propriedades 'titulo' e 'conteudo'.
 */
class Texto implements Documento {
    // Declaração das propriedades obrigatórias da interface
    public titulo: string;
    public conteudo: string;

    /**
     * Construtor para inicializar as propriedades do documento.
     */
    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    /**
     * Método que retorna o título e o conteúdo formatados.
     * @returns Uma string formatada no padrão "Título: [titulo], Conteúdo: [conteudo]".
     */
    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

// 3. Criação de Instâncias e Demonstração
console.log("--- Criação do Objeto ---");

const meuDocumento = new Texto(
    "Introdução à Programação",
    "Interfaces e Classes em TypeScript são essenciais para um código robusto."
);

console.log(`\nDocumento criado: ${meuDocumento.titulo}`);

// Chamada do método e impressão do resultado
console.log("\n--- Resultado do Método exibir() ---");
const saidaFormatada = meuDocumento.exibir();
console.log(saidaFormatada);

// Verificação do tipo (opcional, demonstra a compatibilidade)
const documentoGenerico: Documento = meuDocumento; 
console.log(`\nVerificação do Tipo (Interface): ${documentoGenerico.titulo}`);