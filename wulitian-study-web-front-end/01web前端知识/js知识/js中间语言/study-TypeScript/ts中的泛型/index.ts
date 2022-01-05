// 泛型（泛型函数，泛型类，泛型接口 定义：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)）

// 1.泛型函数(any也可以解决不特定的数据类型,T代表泛型)
function fun():any{
    // return 1
    return '1'
}
function fun2<T>(val:T):T {
    return val
}
let res = fun2<string>('123');
let res2 = fun2<number>(123);
console.log(res)
console.log(res2)

// 2.泛型类
class GetArr<T>{
    arr:T[] = []
    push(e:T):T[]{
        this.arr.push(e)
        return this.arr
    }
}
let getArr = new GetArr<number>();
console.log(getArr.push(1))
console.log(getArr.push(2))

// 3.泛型接口
interface Name<T> {
    firstName:T,
    lastName:T,
}

let getName:Name<string> = {
    firstName:'123',
    lastName:'123'
}

interface Car<T> {
    (value:T):T
}

let a:Car<string> = function<T>(value:T){
    return value
}
console.log(a("123"))

