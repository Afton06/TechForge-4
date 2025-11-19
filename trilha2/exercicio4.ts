class Temperatura {
    // Atributo privado para armazenar a temperatura em Celsius
    private valorCelsius: number;

    /**
     * Construtor da classe Temperatura.
     * @param valorCelsius O valor da temperatura em graus Celsius.
     */
    constructor(valorCelsius: number) {
        // Regra de segurança: A menor temperatura possível é o zero absoluto (-273.15°C).
        // Evitamos instanciar com valores fisicamente impossíveis.
        if (valorCelsius < -273.15) {
            console.error("A temperatura não pode ser inferior ao Zero Absoluto (-273.15°C). Usando -273.15 como valor.");
            this.valorCelsius = -273.15;
        } else {
            this.valorCelsius = valorCelsius;
        }
    }

    /**
     * Retorna o valor da temperatura em Celsius.
     */
    public getCelsius(): number {
        return this.valorCelsius;
    }

    /**
     * Define um novo valor para a temperatura em Celsius.
     * @param novoValor O novo valor da temperatura em Celsius.
     */
    public setCelsius(novoValor: number): void {
        if (novoValor < -273.15) {
            console.error("Novo valor inválido: abaixo do Zero Absoluto.");
        } else {
            this.valorCelsius = novoValor;
        }
    }

    // --- Métodos de Conversão ---

    /**
     * Converte a temperatura de Celsius para Fahrenheit.
     * Fórmula: F = C * 9/5 + 32
     * @returns O valor da temperatura em Fahrenheit.
     */
    public paraFahrenheit(): number {
        const fahrenheit = (this.valorCelsius * 9/5) + 32;
        return fahrenheit;
    }

    /**
     * Converte a temperatura de Celsius para Kelvin.
     * Fórmula: K = C + 273.15
     * @returns O valor da temperatura em Kelvin.
     */
    public paraKelvin(): number {
        const kelvin = this.valorCelsius + 273.15;
        return kelvin;
    }
}

// --- Exemplo de Uso ---

// 1. Criar uma instância com 25°C (Temperatura ambiente)
const tempAmbiente = new Temperatura(25);

console.log("--- Conversões para 25°C (Temperatura Ambiente) ---");
console.log(`Celsius: ${tempAmbiente.getCelsius().toFixed(2)} °C`);
console.log(`Fahrenheit: ${tempAmbiente.paraFahrenheit().toFixed(2)} °F`); // (25 * 1.8) + 32 = 77
console.log(`Kelvin: ${tempAmbiente.paraKelvin().toFixed(2)} K`); // 25 + 273.15 = 298.15

// 2. Criar uma instância com 100°C (Ponto de ebulição da água)
const tempEbulicao = new Temperatura(100);

console.log("\n--- Conversões para 100°C (Ponto de Ebulição da Água) ---");
console.log(`Celsius: ${tempEbulicao.getCelsius().toFixed(2)} °C`);
console.log(`Fahrenheit: ${tempEbulicao.paraFahrenheit().toFixed(2)} °F`); // (100 * 1.8) + 32 = 212
console.log(`Kelvin: ${tempEbulicao.paraKelvin().toFixed(2)} K`); // 100 + 273.15 = 373.15

// 3. Testar o Zero Absoluto
const zeroAbsoluto = new Temperatura(-273.15);

console.log("\n--- Conversões para -273.15°C (Zero Absoluto) ---");
console.log(`Celsius: ${zeroAbsoluto.getCelsius().toFixed(2)} °C`);
console.log(`Fahrenheit: ${zeroAbsoluto.paraFahrenheit().toFixed(2)} °F`);
console.log(`Kelvin: ${zeroAbsoluto.paraKelvin().toFixed(2)} K`);