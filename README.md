# Design Patterns

## Introduction :

> A **design pattern** is a general repeatable solution to a commonly occurring problem in software design. It is a description or template for how to solve a problem that can be used in many different situations.
> 

**Wiki definition:** 

> In software engineering, a **software design pattern** is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code.
> 

## Creational Design Patterns ****:****

**Creational Design Patterns** focus on controlling the creation process of objects in a software system. While creating a new instance of a class, one usually needs to use the **`new`**
 keyword, but having numerous instances scattered throughout an application can lead to complexities, instability, and low testability. This is because classes tend to become interdependent, requiring changes in multiple classes to implement any modifications, which makes the system less flexible and harder to maintain over time. 

Therefore, Creational Design Patterns aim to create objects in a more organized and structured manner, minimizing dependencies and enhancing testability, ultimately leading to a more robust and maintainable system.

- ****Abstract Factory Design Pattern****

**Abstract Factory** provides an interface for creating families of related or dependent objects without specifying their concrete classes. In other words, this model allows us to create objects that follow a general pattern. 

- **Singleton**

The **Singleton** pattern restricts a class's instantiation and ensures that only one instance of the class exists (when the user wants to create a new one. Instead of receiving a fresh object, you’ll get the one you already created). It provides a unique global access point to the object, so each subsequent call to the access point returns the same object. This pattern is useful when managing a shared resource to avoid conflicting requests for the same resource.

```java
public class Singleton  { 
	/*
		Make the default constructor private, to prevent other objects 
		from using the new operator with the Singleton class.
	*/   
    private Singleton() {}
    
	/*
		Create a static creation method that acts as a constructor. 
		This method calls the private constructor to create an object 
		and saves it in a static field. 
	*/
    private static class SingletonHolder {    
        public static final Singleton instance = new Singleton();
    }
	/*
		All following calls to this method return the cached object.
	*/
    public static Singleton getInstance() {    
        return SingletonHolder.instance;    
    }
}
```
**Common use Cases:** 

The **Singleton** pattern is commonly used for resources that are expensive to create, such as database connection objects. It's also good practice to keep all loggers as Singletons to increase performance. Classes that provide access to configuration settings for the application, as well as classes that contain resources that are accessed in shared mode, are also good candidates for the Singleton pattern.

- **Builder**

The **Builder** pattern is an object creation design pattern whose intent is to separate the construction of a complex object from its representation. By doing so, the same construction process can lead to different representations.

**Common use Cases:** 

To solve the **telescoping constructor problem**, the problem with this pattern is that once constructors are 4 or 5 parameters long it becomes **difficult to remember** the required **order of the parameters** as well as what particular constructor you might want in a given situation.

```java
public class Person {
	public Person(String name);
	public Person(String name, String lastName);
	public Person(String name, String lastName, int age);
	public Person(String name, String lastName, int age, String profession);
}

/*
	With the builder
*/

public class Person {
  private String name;
  private String lastName;
  private int age;
  private String profession;

  public static class Builder {
    //required
    private final String size;

    //optional
    private String lastName = "none";
    private int age = 0;
    private String profession = "none";

    public Builder(String name) {
      this.name = name
    }

    public Builder age(int value) {
      age = value;
      return this;
    }

    public Builder lastName(String value) {
      lastName = value;
      return this;
    }

    public Builder profession(String value) {
      profession = value;
      return this;
    }

    public Person build() {
      return new Person(this);
    }
  }

  private Person(Builder builder) {
    name = builder.age;
    cheese = builder.cheese;
    pepperoni = builder.pepperoni;
    bacon = builder.bacon;
  }
}

PersonBuilder builder = new PersonBuilder();
Person bob = builder.firstName("Bob")
                    .lastName("Builder")
                    .age(33)
                    .profession("Man I love building stuff!")
                    .build();
```

**This results in code that is easy to write and very easy to read and understand.**
 In this example, the **build method could be modified** to check if an invalid parameter value has been supplied.

- **Factory Method**

**Factory Method** pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate.

The **Factory Method** defines a method, which should be used for creating objects instead of using a direct constructor call (`new` operator). Subclasses can override this method to change the class of objects that will be created

- **Prototype**

The **prototype** is a creational design pattern that lets you copy existing objects without making your code dependent on their classes by declaring a common interface for all objects that support cloning.

**When to use :**

When an object is required that is similar to an existing object or when the creation would be expensive as compared to cloning.****

## Structural Design Patterns ****:****

**Structural design patterns** are concerned with how classes and objects can be composed, to form larger structures. These patterns focus on, how the classes inherit from each other and how they are composed of other classes.

- **Adapter / Wrapper**

**An Adapter pattern acts as a connector between two incompatible interfaces that otherwise cannot be connected directly.** An Adapter wraps an existing class with a new interface so that it becomes compatible with the client’s interface.

- **Composite**

**Composite i**s a structural design pattern that allows composing objects into a tree-like structure and working with it as if it was a singular object.

- **Decorator**

**A Decorator pattern** can be used to attach additional responsibilities to an object either statically or dynamically. A Decorator provides an enhanced interface to the original object.

- **Facade**

A **facade** is a design pattern that simplifies the interface of a complex subsystem. It allows the subsystem to be used more easily by hiding its complexity behind a simpler interface. One of the key benefits of the facade pattern is that it decouples the implementation of the client from the subsystem. This means that changes made to the subsystem won't affect the client, making it easier to modify and maintain.

- **Flyweight**

The **flyweight pattern** reduces memory usage and can improve performance in applications where object instantiation is expensive.

In essence, the flyweight pattern is based on a factory that recycles created objects by storing them after creation. Whenever an object is requested, the factory checks if it already exists. If it does, the existing object is returned. Otherwise, a new one is created, stored, and then returned.

- **Proxy**

**The Proxy pattern allows us to create an intermediary that acts as an interface to another resource**, while also hiding the underlying complexity of the component.

**When to use it :**

- Use a skeleton object, also called lazy initialization, to represent a simplified version of a complex or heavy object. This object loads the original object on demand.
- When the original object is located in a different address space and you want to represent it locally, create a proxy object. The proxy object handles all the necessary boilerplate tasks, such as creating and maintaining the connection, encoding, decoding, etc., while the client accesses it as if it were present in their local address space. This is called the **Remote Proxy**
- Use a proxy object to add a layer of security to the original underlying object. This provides controlled access based on the client's access rights This is called the **Protection  Proxy**


## ****Behavioral Design Patterns:****

- **Iterator**

The **iterator pattern** is a type of behavioral pattern used to sequentially access the elements of a collection without exposing its underlying or internal representation. It provides a way to access and traverse the elements of a collection without revealing the internal data structures to clients.

- **Observer**

The **Observer** pattern is a design pattern in which an object, called the **subject**, maintains a list of its dependents, called **observers**, and notifies them automatically of any changes to its state. This allows multiple objects to be notified and updated when changes occur in the observed object without tightly coupling the objects.


- **Strategy**

The **Strategy** pattern is a behavioral pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable at run time. This pattern lets the algorithm vary independently from the clients that use it.

- **State**

The **State** pattern is a behavioral pattern that enables an object to change its behavior when its internal state changes. This makes it appear as though the object has changed its class. The pattern encapsulates state-dependent behavior and separates it from the main object's code.

- **Template Method**


- **Mediator**

- **Visitor**

- **Chain of Responsibility**

- **Memento**