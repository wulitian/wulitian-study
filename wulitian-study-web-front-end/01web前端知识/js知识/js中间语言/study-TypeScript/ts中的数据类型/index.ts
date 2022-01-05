//布尔类型
var obj:boolean = true
console.log(obj)

//数字类型
var num:number = 0
console.log(num)

//字符串类型
var str:string = '123'
console.log(str)

//数组类型
var arr:number[] = [1,2,3]
var arr2:Array<number> = [1,2,3]
console.log(arr)

//元组类型（数组的一种,固定长度的数组）
var tuple:number[] = [1,2,3]
var tuple2:[number,string] = [1,'12131']
console.log(tuple2)

//枚举类型（不设置值时返回下标）
enum Flag {success=1,error=2};
let s:Flag=Flag.success;
console.log(s);

//任意类型
var any:any = '123'
console.log(any)

//unknown类型（不能直接赋值给其他变量如果想赋值）
var unk:unknown = '123'
console.log(unk)

//类型断言
var dy:string
// dy =  unk as string
dy = <string>unk
console.log(dy)

//联合类型
var lh:string|number
lh = '123'
console.log(lh)

//undefined,null
var und:number;
var und2:undefined;
console.log(und)  //输出：undefined
console.log(und2)  //输出：undefined

var nul:null;
nul=null;
console.log(nul)

// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。never的变量只能被never类型所赋值。
var nev1:undefined;
nev1=undefined;

var nev2:null;
nev2=null;

var nev3:never;
function fn():never{
    throw new Error("错误")
}
nev3 = fn()
console.log(nev3)

//对象(?可选参数)
let object:{name:string,age:number,post?:string}
//对象([propname:string]:any任意类型任意属性)
let object2:{name:string,age:number,[propname:string]:any}
//声明函数结构必须为两个数字类型参数并且返回值也为数字
let object3:(a:number,b:number)=>number
object = {name:'wulitian',age:1}
object2 = {name:'wulitian',age:1,sex:'123',timr:'123'}
function add( a :number, b:number):number{
    return a+b;
}
object3 = add
console.log(object)
console.log(object2)
console.log(object3(1,2))
console.log(object3(1,2))
console.log(object3(1,2))
console.log(object3(1,2))
