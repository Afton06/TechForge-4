// 1. Classe Base Abstrata ou Interface (usaremos uma classe base para herança)
abstract class Pagamento {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    /**
     * Método abstrato que define o contrato: todas as formas de pagamento
     * devem saber como se processar.
     */
    abstract processar(): void;
}

// 2. Subclasse: Pagamento com Cartão de Crédito
class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(valor: number, numeroCartao: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    /**
     * Sobrescrita do método processar() para lógica de Cartão.
     */
    processar(): void {
        console.log(`\n💳 Processando pagamento com Cartão de Crédito... (Valor: R$${this.valor.toFixed(2)})`);
        
        // Simulação de validação do cartão
        if (this.numeroCartao.length >= 13 && this.numeroCartao.length <= 16) {
            console.log(`   * Validação: Número do cartão (${this.numeroCartao.substring(0, 4)}...${this.numeroCartao.slice(-4)}) é válido.`);
            console.log("   * Transação Aprovada: Pagamento efetuado com sucesso.");
        } else {
            console.log("   * Erro: Número de cartão inválido.");
        }
    }
}

// 3. Subclasse: Pagamento com Boleto
class PagamentoBoleto extends Pagamento {
    // Para simplificar, o Boleto apenas precisa do valor
    
    constructor(valor: number) {
        super(valor);
    }

    /**
     * Sobrescrita do método processar() para lógica de Boleto.
     */
    processar(): void {
        console.log(`\n📄 Processando pagamento com Boleto... (Valor: R$${this.valor.toFixed(2)})`);
        
        // Simulação de geração de código de barras
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`   * Código de Boleto Gerado: ${codigoBoleto}`);
        console.log("   * Instrução: Pagamento pendente até a data de vencimento.");
    }

    private gerarCodigoBoleto(): string {
        // Gera um código de barras simulado (exemplo)
        return `99999.12345 67890.123456 78901.234567 1 ${Math.floor(Math.random() * 100000000000000)}`;
    }
}

// 4. Função Polimórfica (Contexto de Uso)
/**
 * Aceita um array de diferentes tipos de Pagamento e chama o método processar()
 * de cada um, demonstrando o polimorfismo.
 * @param pagamentos Um array de objetos que herdam de Pagamento.
 */
function processarTodosPagamentos(pagamentos: Pagamento[]): void {
    console.log("=======================================");
    console.log(" Iniciando o processamento de pagamentos");
    console.log("=======================================");

    for (const pagamento of pagamentos) {
        // A função processarTodosPagamentos trata todos os objetos como 'Pagamento',
        // mas o método 'processar()' executado é o da classe real (Cartao ou Boleto).
        pagamento.processar();
    }

    console.log("\n=======================================");
    console.log(" Processamento concluído.");
}

// 5. Instanciação e Execução
const transacoes: Pagamento[] = [
    new PagamentoCartao(150.75, "1234567890123456"), // Cartão válido
    new PagamentoBoleto(49.90),
    new PagamentoCartao(2200.00, "111"),              // Cartão inválido
    new PagamentoBoleto(10.50)
];

processarTodosPagamentos(transacoes);