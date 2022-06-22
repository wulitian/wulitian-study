# vue中template到render过程

#### 主要过程

vue的模板解析过程如下：template-ast-render函数，vue在模板编译中执行compileToFunctions,将template转换成render函数

#### compileToFunctions主要核心点

1. 调用parse方法将template转换为ast抽象语法树其实就是用js表示整个模板
2. 解析过程，利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本时都会分别执行对应的回调函数，来达成对应的ast树
3. ast树有三种节点类型，普通文本1，表达式2，纯文本3
4. 对静态节点做优化这个过程分析出那些是静态节点或者静态节点根，如果是静态节点，他们生成dom永远不会改变，这是运行时模板更新起到优化作用
5. 生成代码generate将ast抽象语法树编译成render字符串，并将静态部分放到staticRender中。最后通过new Function(render)生成render函数