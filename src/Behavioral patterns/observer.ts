interface Article {
  title: string;
}

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */

interface Subject<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): void;
}

/**
 * The Observer interface declares the update method, used by subjects.
 */

interface Observer<T> {
  update(subject: Subject<T>, data: T): void;
}

interface ConcreteObserver extends Observer<Article> {
  username: string;
}

interface ConcreteSubject extends Subject<Article> {
  username: string;
}

class UserSubject implements ConcreteSubject {
  constructor(public username: string) {}

  private observers: ConcreteObserver[] = [];

  public subscribe(observer: ConcreteObserver): void {
    console.log(
      `${observer.username} subscribed to ${this.username} articles.`
    );
    const isAlreadyObserver = this.observers.includes(observer);
    if (isAlreadyObserver) return;
    this.observers.push(observer);
    this.logSubscribers();
  }

  public unsubscribe(observer: ConcreteObserver): void {
    console.log(
      `${observer.username} unsubscribed from ${this.username} articles.`
    );
    this.observers = this.observers.filter((other) => other !== observer);
    this.logSubscribers();
  }

  public notify(article: Article): void {
    console.log(
      `${this.username} notifies its ${this.observers.length} subscribers of the new article.`
    );
    this.observers.map((observer) => observer.update(this, article));
  }

  public publishNewArticle(article: Article): void {
    console.log(`${this.username} published a new article: '${article.title}'`);
    this.notify(article);
  }

  private logSubscribers() {
    console.log(
      `${this.username} now has ${this.observers.length} subscribers.`
    );
  }
}

/**
 * This is a ConcreteObserver
 */

class UserObserver implements ConcreteObserver {
  constructor(public username: string) {}

  public update(subject: ConcreteSubject, article: Article): void {
    if (subject instanceof UserSubject) {
      console.log(
        `${this.username} reads the article '${article.title}' of ${subject.username}`
      );
    }
  }
}

const Subject = new UserSubject("Marius Bongarts");

const User1 = new UserObserver("User1");
Subject.subscribe(User1);

const User2 = new UserObserver("User2");
Subject.subscribe(User2);

Subject.publishNewArticle({
  title: "Will Web Components Replace Frontend Frameworks?",
});

Subject.unsubscribe(User2);

Subject.publishNewArticle({
  title: "Design Patterns With TypeScript Examples: Observer",
});

// interface MobileAlertState {
//   public void alert(AlertStateContext ctx);
// }

// class AlertStateContext {
//   private MobileAlertState currentState;

//   public AlertStateContext()
//   {
//       currentState = new Vibration();
//   }

//   public void setState(MobileAlertState state)
//   {
//       currentState = state;
//   }

//   public void alert() { currentState.alert(this); }
// }

// class Vibration implements MobileAlertState {
//   @Override public void alert(AlertStateContext ctx)
//   {
//       System.out.println(" vibration... & quot;);
//   }
// }

// class Silent implements MobileAlertState {
//   @Override public void alert(AlertStateContext ctx)
//   {
//       System.out.println(" silent... & quot;);
//   }
// }

// class StatePattern {
//   public static void main(String[] args)
//   {
//       AlertStateContext stateContext
//           = new AlertStateContext();
//       stateContext.alert();
//       stateContext.alert();
//       stateContext.setState(new Silent());
//       stateContext.alert();
//       stateContext.alert();
//       stateContext.alert();
//   }
// }