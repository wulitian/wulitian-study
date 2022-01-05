# css中对BFC的理解

#### 精简回答：

1. BFC(块级上下文)：一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素在同一个 BFC 中的两个毗邻的块 级盒在垂直方向（和布局方向有关系）的 margin 会发生折叠。

2. 一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。

3. 不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。

4. 触发BFC的条件：

- 根元素

- 浮动元素，float除none以外的值

- 绝对定位元素：position(absolute,fixed)

- display为以下其中之一的值inline-block，table-cell，table-caption，flex ,inline-flex

- overflow 除了 visible 以外的值（hidden，auto，scroll）

5. BFC的用处

- 可以阻止margin折叠：两个盒子有margin的时候，边距发生了折叠；对#one和#two添加float：left属性后，此时上下两个盒子的边距未发生折叠。float创建 BFC 的好处：可以将本元素的内外边距的折叠均变为正常。而其他的触发条件均不能控制自身外边距的折叠。

- 可以包含内部元素的浮动

- 可以阻止元素被浮动覆盖
