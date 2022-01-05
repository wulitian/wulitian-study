# css中居中

#### 精简回答：

1. left:50% top:50%;margin-top margin-left 指定为负数绝对值为自身宽度一半(有宽度)

2. margin:0 auto（有宽度）left,right,bottom,top均为0，position:absolute

3. left:50% top:50%;transform:translateX(-50%)transform:translateY(-50%)

4. 父div外层配置一个div，同时设置为表格元素 (display: table)，宽度为100%,父div配置为表格单元格元素 (display: table-cell),父div配置居中属性（vertical-align: middle），使子div上下居中,子div通过margin配置左右居中（margin-left:auto; margin-right:auto）

5. 父display:flex 子元素margin: 0 auto

6. display:flex； align-items: center; justify-content: center;

