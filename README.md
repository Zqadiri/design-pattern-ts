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

- **Builder**
- **Factory Method**