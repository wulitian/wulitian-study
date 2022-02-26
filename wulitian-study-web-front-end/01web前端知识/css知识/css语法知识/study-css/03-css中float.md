# css中float

#### 精简回答：

1. 浮动原理？

- 浮动脱离文档流，不占据空间

2. css中设置浮动后，该元素的display值是多少？

- display:block

3. 浮动引起的问题？

- 父元素高度无法撑开

- 同级元素不浮动可能导致覆盖问题

4. 清除浮动方式？

- 父元素div加高
  
- 结尾处div加clear:both
  
- 父级div定义伪类:after与zoom
  
- 父级div定义overflow:hidden
  
- 父级div定义float也需要定义宽度
  
- 结尾br标签定义clear:both
