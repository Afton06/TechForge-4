// 1. Classe Base Abstrata com Encapsulamento
abstract class Funcionario {
    // Atributos encapsulados (private)
    private _nome: string;
    private _salario: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    /**
     * Getter para o nome.
     */
    public get nome(): string {
        return this._nome;
    }

    /**
     * Getter para o salário.
     */
    public get salario(): number {
        return this._salario;
    }

    /**
     * Método abstrato que força as subclasses a implementarem sua própria
     * lógica de cálculo de bônus.
     */
    abstract calcularBonus(): number;
}

// 2. Subclasse Gerente
class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    /**
     * Implementação do bônus para Gerente (10% do salário).
     */
    calcularBonus(): number {
        const bonus = this.salario * 0.10; // 10%
        return bonus;
    }
}

// 3. Subclasse Operário
class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    /**
     * Implementação do bônus para Operário (5% do salário).
     */
    calcularBonus(): number {
        const bonus = this.salario * 0.05; // 5%
        return bonus;
    }
}

// 4. Função Polimórfica de Cálculo
/**
 * Aceita um array de objetos Funcionario e calcula o salário final (salário + bônus)
 * de cada um, demonstrando o polimorfismo.
 * @param funcionarios Um array de objetos que herdam de Funcionario.
 */
function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("--- Cálculo de Salário Final (Salário + Bônus) ---");

    funcionarios.forEach(funcionario => {
        // 1. Polimorfismo: Chama o calcularBonus() específico da subclasse (Gerente ou Operario).
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.salario + bonus;
        
        console.log(`\nNome: ${funcionario.nome}`);
        console.log(`   Cargo: ${funcionario.constructor.name}`); // Mostra o nome da classe (Gerente/Operario)
        console.log(`   Salário Base: R$ ${funcionario.salario.toFixed(2)}`);
        console.log(`   Bônus Aplicado: R$ ${bonus.toFixed(2)}`);
        console.log(`   Salário Final:  R$ ${salarioFinal.toFixed(2)}`);
    });
}

// 5. Instanciação e Execução
const funcionariosDaEmpresa: Funcionario[] = [
    new Gerente("Ana Silva", 8000.00),
    new Operario("João Santos", 3200.00),
    new Gerente("Carlos Lima", 12500.00),
    new Operario("Maria Rocha", 4000.00)
];

calcularSalarioComBonus(funcionariosDaEmpresa);