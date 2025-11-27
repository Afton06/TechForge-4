/**
 * FavoriteManager: Classe abstrata que define os métodos obrigatórios
 * para qualquer gerenciador de favoritos.
 */
abstract class FavoriteManager {
    // Array interno para armazenar os itens favoritos.
    protected favorites: string[] = [];

    /**
     * Adiciona um item à lista de favoritos.
     * @param item O item a ser adicionado.
     */
    abstract addFavorite(item: string): void;

    /**
     * Retorna a lista completa de favoritos.
     * @returns Array de strings.
     */
    abstract getFavorites(): string[];

    /**
     * Método protegido para verificar se um item já existe (case-insensitive).
     */
    protected isDuplicate(item: string): boolean {
        const itemLowerCase = item.toLowerCase().trim();
        return this.favorites.some(fav => fav.toLowerCase().trim() === itemLowerCase);
    }
}