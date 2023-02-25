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

The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (`new` operator). Subclasses can override this method to change the class of objects that will be created.