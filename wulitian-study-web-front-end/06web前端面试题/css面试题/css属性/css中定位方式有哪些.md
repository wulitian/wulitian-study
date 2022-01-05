# css中定位方式有哪些

#### 精简回答：

1. 默认值：initial（浏览器默认值）

2. 继承父级元素的定位机制：inherit

3. 默认：static（没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 ）

4. 相对定位：relative（生成相对定位的元素，相对于其正常位置进行定位。可以使用top, bottom, left, right 或者 z-index 声明）

5. 绝对定位：absolute（生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 ”left”, ”top”, ”right” 以及 ”bottom” 或者 z-index 声明）

6. 固定定位：fixed（生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 ”left”, ”top”, ”right” 以及 ”bottom” 属性进行规定。fixed旧版本IE不支持）

7. 粘性定位：sticky该定位基于用户滚动的位置（它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。注意: Internet Explorer, Edge 15 及更早 IE 版本不支）
