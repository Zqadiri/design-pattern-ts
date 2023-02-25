/**
 * The Creator class declares the factory method that returns
 * new product objects. It’s important that
 * the return type of this method matches the product interface
 */

abstract class Creator {
  public abstract factoryMethod(): Product;
  /**
   * This class contains some core business logic that
   * relies on Product objects.
   */

  // ...
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * The interface, which is common to all objects that can
 * be produced by the creator and its subclasses.
 */

interface Product {
  operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */

class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct2}";
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */

console.log("App: Launched with the ConcreteCreator1.");
console.log(new ConcreteCreator1());
console.log("");

console.log("App: Launched with the ConcreteCreator2.");
console.log(new ConcreteCreator2());
