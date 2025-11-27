// 1. Classe Base com Encapsulamento
class Animal {
    // Atributo privado: só pode ser acessado diretamente dentro da classe Animal
    private energia: number;

    constructor(energiaInicial: number = 50) {
        // Garante que a energia inicial não ultrapasse 100
        this.energia = Math.min(100, energiaInicial);
        console.log(`${this.constructor.name} criado com ${this.energia} de energia.`);
    }

    /**
     * Getter (acessor) para expor a energia de forma controlada.
     */
    protected getEnergia(): number {
        return this.energia;
    }

    /**
     * Setter (mutador) para alterar a energia de forma controlada.
     */
    protected setEnergia(novaEnergia: number): void {
        // Limita a energia entre 0 e 100
        this.energia = Math.max(0, Math.min(100, novaEnergia));
    }

    /**
     * Método base para aumentar a energia.
     * Pode ser chamado por subclasses ou diretamente.
     */
    comer(quantidade: number): void {
        this.setEnergia(this.getEnergia() + quantidade);
        console.log(`[Animal] Comeu e recuperou ${quantidade} de energia.`);
    }

    /**
     * Método para exibir o nível de energia, usando o getter privado.
     */
    statusEnergia(): void {
        console.log(`   * Status: O ${this.constructor.name} está com ${this.getEnergia()} de energia.`);
    }
}

// 2. Subclasse Leão
class Leao extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    /**
     * Sobrescreve comer() para simular o processo de caça:
     * 1. Gasta energia (caminhar, correr).
     * 2. Recupera a energia (comer a presa).
     */
    comer(ganhoEnergia: number): void {
        console.log(`\n🦁 ${this.constructor.name} iniciando a caçada...`);
        const gastoCaça = 15;
        
        // 1. Gasta energia para caçar
        this.setEnergia(this.getEnergia() - gastoCaça);
        console.log(`   - Caçada: Gasto de ${gastoCaça} de energia. Energia atual: ${this.getEnergia()}`);

        // 2. Recupera energia (chama o método da classe base ou usa o setter)
        super.comer(ganhoEnergia);
    }
}

// 3. Subclasse Pássaro
class Passaro extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    /**
     * Sobrescreve comer() para simular alimentação simples (apenas aumento de energia).
     */
    comer(ganhoEnergia: number): void {
        console.log(`\n🐦 ${this.constructor.name} se alimentando...`);
        // Simplesmente chama o método da classe base para aumentar a energia
        super.comer(ganhoEnergia);
    }
}

// 4. Criação de Instâncias e Demonstração do Polimorfismo
const leao = new Leao(70);
const passaro = new Passaro(30);

// Array de animais (usando o tipo base Animal para demonstrar Polimorfismo)
const zoo: Animal[] = [leao, passaro];

console.log("\n--- Início do Ciclo ---");

// 1. Status inicial
zoo.forEach(animal => animal.statusEnergia());

// 2. Ação de comer (diferente para cada animal)
zoo[0].comer(35); // O leão caça (gasta e recupera)
zoo[1].comer(10); // O pássaro se alimenta (só recupera)

// 3. Status final (demonstra as diferentes lógicas aplicadas)
console.log("\n--- Status Final ---");
zoo.forEach(animal => animal.statusEnergia());