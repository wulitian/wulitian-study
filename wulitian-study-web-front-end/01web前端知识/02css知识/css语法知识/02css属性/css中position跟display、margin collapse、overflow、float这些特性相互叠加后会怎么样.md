# css中position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样

#### 精简回答：

1. 两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠。
   
2. 只有垂直方向的 margin 才会折叠，也就是说，水平方向的 margin 不会发生折叠的现象。
   
3. 在 margin 都是正数的情况下，取其中 margin 较大的值为最终 margin 值。
   
4. 当 margin 都是负值的时候，取的是其中绝对值较大的，然后，从 0 位置，负向位移。

5. 当 margin一正一负折叠结果两者之和
   
6. 元素自身的 margin-bottom 和 margin-top 相邻时也会折叠
   
7. 浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠

