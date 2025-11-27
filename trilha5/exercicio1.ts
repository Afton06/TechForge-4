// Interface para definir a estrutura básica da Tarefa
interface Task {
    id: number;
    descricao: string;
}

// 1. Classe Base Abstrata
/**
 * TaskManager: Classe abstrata que define o contrato básico
 * para qualquer sistema de gerenciamento de tarefas.
 */
abstract class TaskManager {
    // Array para armazenar tarefas, tipado como a Interface Task
    protected tasks: Task[] = [];
    private nextId: number = 1;

    /**
     * Método protegido para adicionar uma tarefa com ID único,
     * usado pelas subclasses.
     */
    protected internalAddTask(descricao: string): void {
        // Lógica de checagem de duplicidade: converte para minúsculas
        // para garantir que "Comprar Pão" e "comprar pão" sejam a mesma tarefa.
        const descricaoNormalizada = descricao.trim().toLowerCase();
        
        const isDuplicate = this.tasks.some(
            task => task.descricao.toLowerCase() === descricaoNormalizada
        );

        if (isDuplicate) {
            console.log(`❌ Tarefa duplicada ignorada: "${descricao}"`);
            return;
        }

        const newTask: Task = {
            id: this.nextId++,
            descricao: descricao.trim()
        };
        this.tasks.push(newTask);
        console.log(`✅ Adicionado: "${newTask.descricao}"`);
    }

    /**
     * Método abstrato obrigatório para adicionar uma nova tarefa.
     * @param task A descrição da tarefa a ser adicionada.
     */
    abstract addTask(task: string): void;

    /**
     * Método abstrato obrigatório para listar as tarefas.
     * @returns Um array de strings com as descrições das tarefas.
     */
    abstract listTasks(): string[];
}

// 2. Subclasse Project
class Project extends TaskManager {
    private projectName: string;

    constructor(projectName: string) {
        super();
        this.projectName = projectName;
        console.log(`\n-- Iniciando Projeto: ${projectName} --`);
    }

    /**
     * Implementação de addTask para tarefas de Projeto.
     */
    addTask(task: string): void {
        this.internalAddTask(`[${this.projectName}] ${task}`);
    }

    /**
     * Implementação de listTasks para tarefas de Projeto.
     */
    listTasks(): string[] {
        return this.tasks.map(task => `(Cód: ${task.id}) ${task.descricao}`);
    }
}

// 3. Subclasse DailyTasks
class DailyTasks extends TaskManager {
    constructor() {
        super();
        console.log("\n-- Iniciando Tarefas Diárias --");
    }

    /**
     * Implementação de addTask para tarefas Diárias.
     */
    addTask(task: string): void {
        // Tarefas diárias não têm prefixo de projeto
        this.internalAddTask(task);
    }

    /**
     * Implementação de listTasks para tarefas Diárias.
     */
    listTasks(): string[] {
        return this.tasks.map(task => `[Diária - ${task.id}] ${task.descricao}`);
    }
}

// 4. Demonstração de Uso e Polimorfismo
const projetoSite = new Project("Lançamento do Site");
projetoSite.addTask("Desenvolver a página inicial");
projetoSite.addTask("Testar formulário de contato");
projetoSite.addTask("DESENVOLVER A PÁGINA INICIAL"); // Tentativa de duplicidade

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Responder e-mails");
tarefasDiarias.addTask("Comprar café");
tarefasDiarias.addTask("Responder e-mails"); // Tentativa de duplicidade

console.log("\n==========================================");

// Array para demonstrar Polimorfismo (Todos são TaskManager)
const gerentes: TaskManager[] = [projetoSite, tarefasDiarias];

gerentes.forEach(gerente => {
    // Polimorfismo: O método listTasks() é chamado, mas a implementação
    // executada é a da classe concreta (Project ou DailyTasks).
    console.log(`\nListando Tarefas de: ${gerente.constructor.name}`);
    const lista = gerente.listTasks();
    lista.forEach(task => console.log(`   ${task}`));
});