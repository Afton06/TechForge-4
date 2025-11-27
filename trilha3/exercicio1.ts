// 1. Definição da classe base
class Veiculo {
    /**
     * Método padrão para mover um veículo.
     */
    mover(): void {
        console.log("O veículo está se movendo.");
    }
}

// 2. Subclasse Carro (herda de Veiculo)
class Carro extends Veiculo {
    /**
     * Sobrescreve o método mover() para uma ação específica de carro.
     */
    mover(): void {
        console.log("O carro está dirigindo.");
    }
}

// 3. Subclasse Bicicleta (herda de Veiculo)
class Bicicleta extends Veiculo {
    /**
     * Sobrescreve o método mover() para uma ação específica de bicicleta.
     */
    mover(): void {
        console.log("A bicicleta está pedalando.");
    }
}

// 4. Criação de instâncias e chamada do método mover()
console.log("--- Chamando mover() ---");

// Instância de Carro
const meuCarro = new Carro();
console.log("Carro:");
meuCarro.mover(); // Saída: O carro está dirigindo.

console.log(""); // Linha em branco para separação

// Instância de Bicicleta
const minhaBicicleta = new Bicicleta();
console.log("Bicicleta:");
minhaBicicleta.mover(); // Saída: A bicicleta está pedalando.