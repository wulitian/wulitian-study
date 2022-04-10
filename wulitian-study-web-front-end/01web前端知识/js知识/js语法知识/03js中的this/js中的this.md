# js中的this

## this的指向问题

- 简单讲就是谁调用指向谁

- 箭头函数没有this

- 外层函数调用指向与两个定时器调用this指向window非node环境

- apply,call,bind,this指向第一个参数

- 严格模式下this没有执行环境时指向undefined

## this绑定的优先级

new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.test()) > 默认绑定(独立函数调用)


