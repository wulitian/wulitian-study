# css中变换transform

#### 精简回答：

1. transform是什么？
 
- 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

2. transform介绍？

-  矩阵转换:matrix(n,n,n,n,n,n) matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
               
-  移动转换:translate(x,y) translate3d(x,y,z) translateX(x) translateY(y) translateZ(z)

-  缩放转换:scale(x[,y]?) scale3d(x,y,z) scaleX(x) scaleY(y) scaleZ(z)其中如果是负数代表翻转，0-1之间缩小，大于1放大

-  旋转转换:rotate(angle) rotate3d(x,y,z,angle) rotateX(x) rotateY(y) rotate(Z)

-  倾斜转换:skew(x-angle,y-angle) skewX(x) skewY(y)

-  元素透视:perspective(n)

-  基准点:transform-origin(10px,10px) transform-origin(top) 默认是元素的中心点

3. 水平翻转的实现？

- transform:scale(-1,1)
