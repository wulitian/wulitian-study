function add(x, y, z) {
    return x + y + z;
}

function curry(fn,arr=[]){
    let length = fn.length;
    return function(...arg){
        let newArr = [...arg,...arr]
        if(newArr.length === length){
            return fn(...newArr)
        }else{
            return curry(fn,newArr)
        }
    }
}

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3))
console.log(curryAdd(1)(2,3))
console.log(curryAdd(1,2,3))
