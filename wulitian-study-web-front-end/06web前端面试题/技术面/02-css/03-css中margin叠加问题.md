# css中position，float，display关系

#### 精简回答：

1. 两个或者多个垂直方向相邻的普通流中的块级元素margin会折叠，水平方向不会折叠

2. margin都是正值取最大的，都是负值取绝对值最大的，元素自身的margin-bottom,margin-top也会折叠

3. 浮动元素，绝对定位，inline-block不会和垂直方向其他元素产生折叠
