/**
 * 工程方法模式示例
 */

function Factory(type,content){
    if (this instanceof Factory) {
        console.log(2)
        return new this[type](content);
    }else{
        console.log(1)
        return new Factory(type,content)
    }
}
Factory.prototype = {
    javascript: function(content){
        console.log(content);
    },
    java: function(content){
        console.log(content);
    },
    vb: function(content){
        console.log(content);
    }
}
const arr = [
    {type:'javascript',content:'javascript我最强'},
    {type:'java',content:'java我最强'},
    {type:'vb',content:'vb我最强'}
]
arr.forEach((e)=>{
    Factory(e.type,e.content)
})
