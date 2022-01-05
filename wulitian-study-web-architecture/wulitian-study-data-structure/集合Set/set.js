// set
// add(element):向集合添加一个元素
// delete(element)：删除集合里的某个元素
// has(element):判断集合里是否有某个元素
// clear(): 清空集合（移除集合里的所有元素）
// size(): 返回集合所包含元素的数量
// values():返回一个包含集合所有元素的数组

function Set(){
    this.set = {}
}
Set.prototype.has = function(element) {
    return element in this.set;
}
Set.prototype.add = function(element) {
    if(!this.has(element)){
        this.set[element] = element;
        return true
    }
    return false
}
Set.prototype.delete = function(element) {
    if(this.has(element)){
        delete this.set[element]
        return true
    }
    return false
}
Set.prototype.clear = function() {
    this.set = {}
}
Set.prototype.size = function() {
    return Object.keys(this.set).length

}
Set.prototype.values = function() {
    return Object.values(this.set)
}
let set = new Set();
set.add(1)
set.add(2)
set.add(3)
console.log(set)
console.log(set.has(1))
console.log(set.values())
console.log(set.size())
set.delete(1)
console.log(set)
console.log(set.has(1))
