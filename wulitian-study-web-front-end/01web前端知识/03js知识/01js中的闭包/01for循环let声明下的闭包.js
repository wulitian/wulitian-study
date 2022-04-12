/**
 * 由于var声明全局作用域下的，当函数执行时i=5
 * @type {*[]}
 */
const arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = function () {
        console.log(i);
    }
}

arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()
