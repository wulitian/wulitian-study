/**
 * 该方法向右移动目标位到最右边，即位数组的第0个位置上。然后在该数上与形如 0001的二进制形式的数进行AND操作。这会清理掉除了目标位的所有其它位的数据。如果目标位是1，那么结果就是1，反之，结果是0;
 * @param number
 * @param bitPosition
 * @returns {number}
 */
function getBit(number, bitPosition) {
    return (number >> bitPosition) & 1;
}

/**
 * 该方法把1向左移动了bitPosition位，生成了一个二进制形如00100的值。然后我们拿该值与目标数字进行OR操作，就能把目标位设置位1而不影响其它位。
 * @param number
 * @param bitPosition
 * @returns {number}
 */
function setBit(number, bitPosition) {
    return number | (1 << bitPosition);
}

/**
 * 该方法把1向左移动了bitPosition位，生成了一个二进制形如00100的值。然后反转每一位的数字，得到一个二进制形如11011的值。接着与目标值进行AND操作，就能清除掉目标位的值。
 * @param number
 * @param bitPosition
 * @returns {number}
 */
function clearBit(number, bitPosition) {
    let num = ~(1 << bitPosition);
    return number & num;
}

/**
 * 先清理在设置
 * @param number
 * @param bitPosition
 * @param bitValue
 * @returns {number}
 */
function updateBit(number, bitPosition, bitValue) {
    const val = bitValue ? 1 : 0;
    const num = ~(1 << bitPosition)
    return (num & number) | (val << bitPosition)
}

/**
 * 奇数最后一位永远是1
 * @param number
 * @returns {boolean}
 */
function isEven(number) {
    return (number&1) === 0
}

/**
 * 32为浮点数第一位是符号位0代表整数1代表负数
 * @param number
 * @returns {boolean}
 */
function isPositive(number){
    if(number===0){
        return false;
    }
    return ((number>>31)&1) === 0;
}

/**
 * 左侧移动1位乘2
 * @param number
 * @returns {*}
 */
function mutiplyByTwo(number){
    return number<<1
}

/**
 * 右侧移动1位除2
 * @param number
 * @returns {*}
 */
function divideByTwo(number){
    return number>>1
}

/**
 * 取反加1
 * @param number
 * @returns {number}
 */
function switchSign(number){
    return ~number + 1;
}

export {
    getBit,
    setBit,
    clearBit,
    updateBit,
    isEven,
    isPositive,
    mutiplyByTwo,
    divideByTwo,
    switchSign
}