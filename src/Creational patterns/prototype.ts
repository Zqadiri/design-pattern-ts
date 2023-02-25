class Prototype {
    public name: String;
    public StartDate: object;

    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.StartDate);
        return clone;
    }
}

function clientCode() {
    const p1 = new Prototype();
    p1.name = 'Amine'
    p1.StartDate = new Date();

    const p2 = p1.clone();
    if (p1.name === p2.name) {
        console.log('Primitive field values have been carried over to a clone.');
    } else {
        console.log('Primitive field values have not been copied.');
    }
    if (p1.StartDate === p2.StartDate) {
        console.log('Simple component has not been cloned.');
    } else {
        console.log('Simple component has been cloned.');
    }
}

clientCode();