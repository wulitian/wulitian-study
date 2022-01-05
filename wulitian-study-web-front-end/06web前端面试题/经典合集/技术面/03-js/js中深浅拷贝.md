# js中深浅拷贝

#### 精简回答：

1.拷贝概念：

- 浅拷贝：原始类型为值传递，引用类型为引用传递

- 深拷贝：所有元素或属性完全复制与原对象完全分离，修改新对象不会影响原对象

2.浅拷贝（只拷贝一层，除了对象拷贝的是引用类型，其他都是直接赋值）

- 循环对象或数组直接复制

- Object.assign() （如果对象只有深一层可以实现深拷贝）

- {...obj} [...arr] Array.prototype.concat() Array.prototype.slice()

3.深拷贝（拷贝多层）

- JSON.parse(JSON.stringify(obj)) 弊端：抛弃对象的constructor,不管是什么都会变成Object，并且只能转换JSON格式对象 Function 正则，Symbol了转换不了

- 递归手动赋值

- Object.create(obj)
