/**
 * 装饰器模式示例
 */
// 参数适配
function fun(obj){
    let _adapter = {
        name: '雾里天',
        sex: '男',
        age: '18'
    }
    for(let i in _adapter){
        _adapter[i] = obj[i] || _adapter[i]
    }
    console.log(_adapter);
    //    do something
}
fun({name:'wulitan'});

// 数组转对象适配
let arr = ['wulitian','男', '18'];
function arrToObj(arr) {
    return {
        name: arr[0],
        sex: arr[1],
        age: arr[2]
    }
}

console.log(arrToObj(arr));
