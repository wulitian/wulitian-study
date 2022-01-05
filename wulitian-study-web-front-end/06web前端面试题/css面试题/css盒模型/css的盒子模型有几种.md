# CSS的盒子模型有几种？

#### 精简回答：

1.盒模型的组成：margin padding border content。

2.盒模型的分类：W3C模型,IE模型（IE8以下版本）。

3.盒模型的区别：

    W3C盒模型content范围：content不包含其他部分。
    
    IE盒模型content范围：content包含了border 和 padding，其内容真正的宽度是(width-padding-boder)。
    
4.css3中定义的box-sizing。

5.content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。

6.border-box:宽度和高度和内边距和边框分别应用到元素的内容框。在宽度和高度之内绘制元素的内边距和边框。
