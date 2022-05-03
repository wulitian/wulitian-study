function myNew() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);
    return typeof result === "object" ? result : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        console.log(this.name + this.age)
    }
}

let person = myNew(Person, 'wulitian', 28);
console.log(person)
class Pl{
    constructor() {
        this._name = "";
    }
    get name(){
        console.log(1231231233)
        return this._name;
    }
    set name(newName){
        console.log(222222222)
        this._name = newName;
    }
    static create(){
        return 1
    }
}
const t = new Pl(111);
console.log(Pl.create())
t.name = "aasdasdasd"
console.log(t.name)
