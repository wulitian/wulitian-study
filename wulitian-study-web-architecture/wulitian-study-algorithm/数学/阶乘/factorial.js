// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(number) {
    if (Object.prototype.toString.call(number) === "[object Number]") {
        return number > 1 ? number * factorial(--number) : 1;
    } else {
        console.warn('请输入数字阶乘')
    }
}

function factorial2(number) {
    if (Object.prototype.toString.call(number) === "[object Number]") {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;

    } else {
        console.warn('请输入数字阶乘')
    }
}

export {
    factorial,
    factorial2
}