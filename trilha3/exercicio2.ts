// 1. Definição da Classe Abstrata
abstract class FiguraGeometrica {
    /**
     * Método abstrato que deve ser implementado por todas as subclasses.
     * Não possui implementação na classe base.
     */
    abstract calcularArea(): number;
}

// 2. Subclasse Círculo
class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    /**
     * Implementação da área do Círculo: π * r²
     */
    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

// 3. Subclasse Quadrado
class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    /**
     * Implementação da área do Quadrado: lado * lado
     */
    calcularArea(): number {
        return this.lado * this.lado;
    }
}

// 4. Subclasse Triângulo
class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    /**
     * Implementação da área do Triângulo: (base * altura) / 2
     */
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// 5. Função que processa o array de figuras
/**
 * Aceita um array de FiguraGeometrica e calcula/imprime a área de cada uma.
 * @param figuras Um array de objetos que herdam de FiguraGeometrica.
 */
function imprimirAreas(figuras: FiguraGeometrica[]): void {
    console.log("--- Cálculo das Áreas ---");
    figuras.forEach((figura, index) => {
        // O polimorfismo garante que o método calcularArea()
        // correto (da subclasse) seja chamado para cada objeto.
        const area = figura.calcularArea();
        let nomeFigura: string;

        // Determina o nome da figura para impressão (opcional, mas útil)
        if (figura instanceof Circulo) {
            nomeFigura = "Círculo";
        } else if (figura instanceof Quadrado) {
            nomeFigura = "Quadrado";
        } else if (figura instanceof Triangulo) {
            nomeFigura = "Triângulo";
        } else {
            nomeFigura = "Figura Desconhecida";
        }

        console.log(`${index + 1}. ${nomeFigura}: Área = ${area.toFixed(2)}`);
    });
}

// 6. Instanciação e Execução
const figuras: FiguraGeometrica[] = [
    new Circulo(5),      // Raio = 5
    new Quadrado(4),     // Lado = 4
    new Triangulo(6, 8), // Base = 6, Altura = 8
    new Circulo(2.5)     // Raio = 2.5
];

imprimirAreas(figuras);