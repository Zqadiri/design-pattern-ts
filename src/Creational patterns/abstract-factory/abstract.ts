/**
 * Abstract Factory Interface declares a set of methods that
 * return different abstract products. It deals with the creation
 * creating the concrete objects.
 */

export interface AbstractFactory {
  createProductA(): AbstractProductA;
}

/**
 * Concrete factories produce a family of products that belong
 * to a single variant.
 */

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }
}

/**
 * Each distinct product of a product family should have a base
 * interface. All variants of the product must implement this
 * interface.
 */

export interface AbstractProductA {
  usefulFunctionA(): string;
}

export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}

/**
 * Uses only interfaces declared by AbstractFactory and AbstractProduct classes.
 * @param AbstractFactory 
 */

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();

  console.log(productA.usefulFunctionA());
}

console.log("Client: Testing client code with ConcreteFactory1");
clientCode(new ConcreteFactory1());
