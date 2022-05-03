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
