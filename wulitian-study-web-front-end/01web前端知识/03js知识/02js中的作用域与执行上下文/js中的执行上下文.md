# js中的执行上下文与作用域

#### 执行上下文分类

- 全局执行上下文

- 函数执行上下文

- eval函数执行上下文

#### 执行栈

执行栈就是调用栈，用于存储代码运行的执行上下文， 当引擎在执行脚本时，先创建全局执行上下文压入栈
当引擎调用一个函数时，会为该函数创建执行上下文压入栈顶部 引擎会先执行执行上下文在顶部的函数，执行后，
会弹出，然后控制流程会到达当前执行上下文的下一个上下文 一旦所有代码执行完毕，js引擎从执行栈中移除全局执行上下文。

