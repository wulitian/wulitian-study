//布尔类型
var obj = true;
console.log(obj);
//数字类型
var num = 0;
console.log(num);
//字符串类型
var str = '123';
console.log(str);
//数组类型
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr);
//元组类型（数组的一种,固定长度的数组）
var tuple = [1, 2, 3];
var tuple2 = [1, '12131'];
console.log(tuple2);
//枚举类型（不设置值时返回下标）
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s);
//任意类型
var any = '123';
console.log(any);
//unknown类型（不能直接赋值给其他变量如果想赋值）
var unk = '123';
console.log(unk);
//类型断言
var dy;
// dy =  unk as string
dy = unk;
console.log(dy);
//联合类型
var lh;
lh = '123';
console.log(lh);
//undefined,null
var und;
var und2;
console.log(und); //输出：undefined
console.log(und2); //输出：undefined
var nul;
nul = null;
console.log(nul);
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。never的变量只能被never类型所赋值。
var nev1;
nev1 = undefined;
var nev2;
nev2 = null;
var nev3;
function fn() {
    throw new Error("错误");
}
nev3 = fn();
console.log(nev3);
//对象(?可选参数)
var object;
//对象([propname:string]:any任意类型任意属性)
var object2;
//声明函数结构必须为两个数字类型参数并且返回值也为数字
var object3;
object = { name: 'wulitian', age: 1 };
object2 = { name: 'wulitian', age: 1, sex: '123', timr: '123' };
function add(a, b) {
    return a + b;
}
object3 = add;
console.log(object);
console.log(object2);
console.log(object3(1, 2));
console.log(object3(1, 2));
console.log(object3(1, 2));
console.log(object3(1, 2));
