# with与eval与strict

## with

可以形成自己的作用域

## eval

1. eval() 函数会将传入的字符串当做 JavaScript 代码进行执行，如果传入的字符串是表达式则返回表达式求值结果，否则返回 undefined 。

2. 应该避免使用eval,不安全,耗性能（2次,一次解析成js语句,一次执行）。

## strict

- 禁止意外创建全局变量
  
- 不允许函数有相同的参数名称
  
- 静默错误
  
- 不允许使用原先的八进制格式 0123
  
- with语句不允许使用
  
- eval函数不会向上引用变量了
  
- 严格模式下自执行函数(默认绑定)会指向undefined

- setTimeout中依旧指向window

