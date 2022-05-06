// 方法一
// const log = console.log;
// console.log = function () {
//     log('自定义', ...arguments)
// }
// 方法二
console.log=(function (oriLogFunc) {
    return function () {
        oriLogFunc('自定义',...arguments)
    }
})(console.log)

console.log(1, 2)
