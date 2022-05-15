# css中relative和absolute定位原点是

#### 精简回答：

1. relative 的定位原点是相对正常位置；相对于文档流；”相对于”它的原始起点进行移动。

2. absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。左上角

3. fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。

4. static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。

5. inherit规定从父元素继承 position 属性的值。
