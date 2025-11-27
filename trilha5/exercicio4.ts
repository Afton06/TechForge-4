// Tipagem para o objeto de resultados: chave (candidato) é string, valor (votos) é number.
type VoteResults = Record<string, number>;

/**
 * VoteSystem: Classe abstrata que define os métodos obrigatórios
 * para qualquer sistema de votação.
 */
abstract class VoteSystem {
    // Objeto protegido para armazenar a contagem de votos.
    protected votes: VoteResults = {};

    /**
     * Adiciona um voto a um candidato específico.
     * @param candidate O nome do candidato.
     */
    abstract voteFor(candidate: string): void;

    /**
     * Retorna os resultados da votação.
     * @returns Um objeto que contém os resultados, formatado de maneira específica para a subclasse.
     */
    abstract getResults(): VoteResults | { candidate: string, votes: number }[];
}