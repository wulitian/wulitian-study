/**
 * 简单工厂模式示例
 */

function Factory(name, type, time){
    let obj = new Object();
    obj.name = name;
    obj.type = type;
    obj.time = time;
    let objType = {
        'js':()=>{
            obj.js = 'js';
            return obj
        },
        'java':()=>{
            obj.java = 'java';
            return obj
        },
        'vb':()=>{
            obj.vb = 'vb';
            return obj
        }
    }
    console.log(objType[name]())
    objType[name]||objType[name]();
    return obj
}

let book1 = new Factory('js','雾里天','2021-09-17');
let book2 = new Factory('java','雾里天','2021-09-17');
let book3 = new Factory('vb','雾里天','2021-09-17');

console.log(book1)
console.log(book2)
console.log(book3)
