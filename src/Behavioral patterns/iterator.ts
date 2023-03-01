interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Collection {
  createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number> {
  private collection: Number[];
  private _index: number = 0;

  constructor(newCollection: Number[]) {
    this.collection = newCollection;
  }

  next(): any {
    const result = this.collection[this._index];
    this._index += 1;
    return result;
  }

  hasNext(): boolean {
    return this._index < this.collection.length;
  }
}

class ConcreteCollection implements Collection {
  private collection: Number[] = [];

  constructor(collection: Number[]) {
    this.collection = collection;
  }

  createIterator(): Iterator<Number> {
    return new ConcreteIterator(this.collection);
  }
}

function main() {
  const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);
  const iterator: Iterator<Number> = collection.createIterator();

  while (iterator.hasNext()) {
    const number: Number = iterator.next();
    console.log(`${number.valueOf()}`);
  }
}

main()