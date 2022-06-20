# css中居中

#### 精简回答：

1. 父position:relative 子元素left:50% top:50%;margin-top margin-left 指定为负数绝对值为自身宽度一半(有宽度)

2. 父position:relative 子元素margin: auto（有宽度）left,right,bottom,top均为0，position:absolute

3. 父position:relative 子元素left:50% top:50%;transform:translateX(-50%)transform:translateY(-50%)

5. 父display:flex 子元素margin: 0 auto

6. 父设置三个属性 display:flex； align-items: center; justify-content: center;

