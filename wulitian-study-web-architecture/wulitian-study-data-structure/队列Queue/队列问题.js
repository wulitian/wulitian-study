/**
 * licode933最近请求次数
 * 输入：[[1],[100],[3001],3002]]
 * 输出：[1,2,3,3]
 */
let Queue = require('./queue.js')
function fn(arr){
    let res = []
    let queue = new Queue();
    arr.forEach((item)=>{
        if(!queue.isEmpty()&&item-queue.front()>3000){
            queue.dequeue();
        }else{
            queue.enqueue(item);
        }
        res.push(queue.size());
    })
    return res
}
console.log(fn([1,100,3001,3002]))

