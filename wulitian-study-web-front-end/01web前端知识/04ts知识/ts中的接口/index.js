// 接口
function fun(obj: { name: string }): string {
    return obj.name;
}

console.log(fun({name: '123'}))

interface Person {
    name: string,
    age: number
}

function p1(p: Person): void {
    console.log(p.name)
    console.log(p.age)
}

p1({name: 'wulitian', age: 20})

// 1.可选属性
interface Selectable {
    name?: string,
    age?: number
}

function selectableFun(obj: Selectable): void {
    if (obj.name) {
        console.log(obj.name);
    }
    if (obj.age) {
        console.log(obj.age);
    }
}

selectableFun({name: "wulitian", age: 20})

// 2.只读属性
interface ReadonlyStr {
    readonly name: string;
    readonly age: number
}

function readonlyFun(obj: ReadonlyStr): void {
    console.log(obj)
    // obj.name = 2
}

readonlyFun({name: "wulitian", age: 20})

// 3.额外属性检查
interface Extra {
    name?: string,
    age?: number,

    [propName: string]: any
}

function extraFun(obj: Extra): Extra {
    return obj
}

extraFun({name: 'wulitian', age: 20, color: "yellow"})

// 4.函数类型
interface Func {
    (name: string, age: number): void
}

let func: Func
func = function (name: string, age: number) {
    console.log(age)
}
func('wulitian', 20)

// 5.可索引类型
interface IndexType {
    [index: number]: number;
}

let indexArr: IndexType = [1, 2, 3, 4]

interface IndexType2 {
    [index: number]: string;
}

let indexArr2: IndexType2 = ['1', '2', '3', '4']

// 6.类类型
interface ClassType {
    current: Date;

    setTime(d: Date)
}

class classType implements ClassType {
    current: Date;

    setTime(d: Date) {
    }
}

// 9.继承接口
interface ExtendInterface {
    name: string;
}

interface ExtendInterface2 extends ExtendInterface {
    age: number
}

class extendInterface implements ExtendInterface2 {
    age: number;
    name: string;

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }
}

const a = new extendInterface()
a.setName(`wulitian`);
a.setAge(1231);
console.log(a)

// 10.混合类型
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 11.接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
        console.log(123123);
    }
}
