// JS深拷贝总结JS的原生方法不支持深拷贝，Object.assign和{...obj}都属于浅拷贝，下面我们讲解如何使用JS实现深拷贝。JSON.sringify 和 JSON.parse这是JS实现深拷贝最简单的方法了，原理就是先将对象转换为字符串，再通过JSON.parse重新建立一个对象。 但是这种方法的局限也很多：不能复制function、正则、Symbol循环引用报错 相同的引用会被重复复制
let obj = {
    reg : /^asd$/,
    fun: function(){},
    syb:Symbol('foo'),
    asd:'asd'
};
let cp = JSON.parse(JSON.stringify(obj));
console.log(cp);
// 递归实现JS原生的方法不能很好的实现深复制，那么我们就动手实现一个。思想非常简单：对于简单类型，直接复制。对于引用类型，递归复制它的每一个属性。我们需要解决的问题：循环引用相同引用不同的类型（笔者仅实现了数组和对象的区分）
function deepCopy(target){
    let copyed_objs = [];//此数组解决了循环引用和相同引用的问题，它存放已经递归到的目标对象
    function _deepCopy(target){
        if((typeof target !== 'object')||!target){return target;}
        for(let i= 0 ;i<copyed_objs.length;i++){
            if(copyed_objs[i].target === target){
                return copyed_objs[i].copyTarget;
            }
        }
        let obj = {};
        if(Array.isArray(target)){
            obj = [];//处理target是数组的情况
        }
        copyed_objs.push({target:target,copyTarget:obj})
        Object.keys(target).forEach(key=>{
            if(obj[key]){ return;}
            obj[key] = _deepCopy(target[key]);
        });
        return obj;
    }
    return _deepCopy(target);
}
