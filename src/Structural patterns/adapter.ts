/**
 * This is the desired interface class which will be used by the clients.
 */

class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

/**
 * This is the class which is used by the Adapter class to reuse the
 * existing functionality and modify them for desired use.
 */

class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

/**
 * This class is a wrapper class which implements the desired target interface
 * and modifies the specific request available from the Adaptee class.
 */

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

const target = new Target();
console.log(target.request());

console.log("");

const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("");

const adapter = new Adapter(adaptee);
console.log(adapter.request());
