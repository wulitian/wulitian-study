// 函数的定义
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};
console.log(add(10, 20))
// 书写完整函数类型
let myAdd2: (x: number, y: number) => number = function (x: number, y: number) {

}
