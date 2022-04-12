/**
 * 箭头函数没有this沿着作用域向上查找，当前是window下的name
 */
var name = 'wulitian';

const obj = {
    name: 'WULITIAN',
    fn: () => {
        console.log(this.name)
    }
}
obj.fn()