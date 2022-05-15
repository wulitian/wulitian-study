# 伪类伪元素

#### 精简回答：

1. css3中的伪类

- p:first-of-type：选择父元素中的首个p元素

- p:last-of-type：选择父元素中的最后一个p元素

- p:only-of-type：选择父元素中唯一一个p元素

- p:only-child：选择父元素中有且仅有一个元素p元素

- p:nth-child：选择父元素中元素的第几个p元素p:nth-child(odd)基数p:nth-child(even)偶数也可以是表达式p:nth-child(2n+1)

- enable：表单控件可用

- disable：表单控件不可用

- checked：单选按钮，多选按钮选中

- after：在元素后面添加内容

- before：在元素前面添加内容

2. css3中的伪元素

- 单双冒号都行：before,after,first-letter,first-line

- 仅双冒号：selection,placeholder,backdrop

3. first-child与p:first-of-type

- first-child匹配的结构上的第一个

- first-of-type匹配的是父元素中相同子元素的第几个

4. 双冒号与单冒号的的区别

- 单冒号表示css伪类

- 双冒号表示css伪元素

- 为了兼容css2中已有的伪元素使用单冒号after,before
