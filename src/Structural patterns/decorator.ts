interface BaseComponent {
    operation(): string;
}

class ConcreteComponent implements BaseComponent {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements BaseComponent {
    protected component: BaseComponent;

    constructor(component: BaseComponent) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
          
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
console.log(`RESULT: ${simple.operation()}`);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
console.log(`RESULT: ${decorator2.operation()}`);
