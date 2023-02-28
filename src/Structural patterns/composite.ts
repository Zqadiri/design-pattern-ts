export interface Instruction {
    name: string;
    execute(): boolean;
}

export abstract class SingleInstruction implements Instruction {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    execute(): boolean{
        console.log("Child execution");
        return true;
    };
}

export class CompositeInstructionSet implements Instruction {
    private children: Instruction[] = [];

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    execute(): boolean{
        let successful = false;
        for (const child of this.children) {
            successful = child.execute();
            if (!successful) {
                return false;
            }
        }
        return successful;
    }

    addChild(child: Instruction) {
        this.children.push(child);
    }

    removeChild(child: Instruction) {
        this.children = this.children.filter(c => c.name !== child.name);
    }
}

export class LogInstructon extends SingleInstruction {
    log: string;

    constructor(name: string, log: string) {
        super(name);

        this.log = log;
    }

    execute() {
        console.log(`${this.name}: ${this.log}`);
        return true;
    }
}

/**
 * The Task Runner doesn't need to know or care what type of Instruction it is dealing with,
 * so long as it can call it's execute() method
 */

export class TaskRunner {
    tasks: Instruction[];

    constructor(tasks: Instruction[]) {
        this.tasks = tasks;
    }

    runTasks() {
        for (const task of this.tasks) {
            task.execute();
        }
    }
}

function main() {
    // Lets start by creating a SingleInstruction and our CompositeInstructionSet
    const startUpLogInstruction = new LogInstructon('Starting', 'Task runner booting up...');
    const compositeInstruction = new CompositeInstructionSet('Composite');

    // Now let's define some sub tasks for the CompositeInstructionSet
    const firstSubTask = new LogInstructon('Composite 1', 'The first sub task');
    const secondSubTask = new LogInstructon('Composite 2', 'The second sub task');

    // Let's add these sub tasks as children to the CompositeInstructionSet we created earlier
    compositeInstruction.addChild(firstSubTask);
    compositeInstruction.addChild(secondSubTask);

    // Now let's create our TaskRunner with our Tasks
    const taskRunner = new TaskRunner([startUpLogInstruction, compositeInstruction]);
    taskRunner.runTasks();
}

main()

