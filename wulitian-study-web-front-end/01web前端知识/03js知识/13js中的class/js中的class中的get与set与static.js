class Person {
    constructor() {
        this._name = "";
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    static create() {
        return 1
    }
}

const person = new Person();
console.log(Person.create())
person.name = "wulitian"
console.log(person.name)
