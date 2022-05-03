var obj = {
  name: "why",
  age: 18
}

// 获取属性
console.log(obj.name)

// 给属性赋值
obj.name = "wulitian"
console.log(obj.name)

// 删除属性
delete obj.name
console.log(obj)

// 限制: 不允许某一个属性被赋值/不允许某个属性被删除/不允许某些属性在遍历时被遍历出来
// 遍历属性
for (var key in obj) {
  console.log(key)
}
