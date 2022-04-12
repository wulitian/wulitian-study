// 接口：属性接口，函数类型接口，可索引接口，类类型接口，接口集成（接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用）

// 1.属性接口（对属性的约束）
interface Person {
    firstName:string,
    lastName:string,
    say: ()=>string,
}
let wlt:Person = {
    firstName:'雾里',
    lastName:'天',
    say:():string =>{
        return 'hello'
    },
}
console.log(wlt.firstName)
console.log(wlt.lastName)
console.log(wlt.say())

// 2.函数接口（对函数的约束）
interface Name{
    (key:string,value:string):string;
}

let wltName:Name=(key:string,value:string):string=>{
    return key+value;
}
console.log(wltName('雾里','天'))

// 3.可索引接口（对数组、对象的约束）
interface Arr{
    [index:number]:string
}
interface Arr2{
    [index:string]:string
}
let arr1:Arr = ['aaa','bbb']
let arr2:Arr2 = {a:'1',b:'2'}
console.log(arr1[0])
console.log(arr2.a)

// 4.类类型接口（对类的约束）
interface Car {
    name:string,
    eat(str:string):void
}
class Ad implements Car{
    name: string;

    eat(str: string): void {
        console.log(`雾里天${str}`)
    }
}
let ad = new Ad();
ad.eat('吃饭了')

// 5.接口继承
interface Ani {
    firstName:string,
}
interface Ani2 extends Ani{
    lastName:string,
}
class P implements Ani2{
    firstName: string='雾里';
    lastName: string='天';
}
let p = new P();
console.log(p.firstName)
console.log(p.lastName)
