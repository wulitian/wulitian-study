/**
 * 计算两个数的最大公约数（最大公因数，也称最大公约数、最大公因子，指两个或多个整数共有约数中最大的一个）
 * 使用欧几里得算法也称为辗转相除法   递归法与递减法
 * @param x
 * @param y
 */
function euclideanAlgorithmRecursion(x, y) {
    return (y === 0) ? x : euclideanAlgorithmRecursion(y, x % y)
}
/**
 * 计算两个数的最大公约数（最大公因数，也称最大公约数、最大公因子，指两个或多个整数共有约数中最大的一个）
 * 使用欧几里得算法也称为辗转相除法
 * @param x
 * @param y
 */
function euclideanAlgorithmSubtraction(x, y) {
    while (x && y && x !== y) {
        [x, y] = x > y ? [x - y, x] : [x, y - x]
    }
    return x || y;
    // return (y === 0) ? x : euclideanAlgorithmSubtraction(y, x - y)
}

export {
    euclideanAlgorithmRecursion,
    euclideanAlgorithmSubtraction
}