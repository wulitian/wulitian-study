# css3transform、animation、transition的区别

#### 精简回答：

1. transition：CSS过渡，为一个元素在不同状态切换的时候定义不同的过渡效果。

    - transition-property 过渡效果的 CSS 属性的名称（height、width、opacity等）。
    
    - transition-duration 完成过渡效果需要时间。（0时不会过度）
    
    - transition-timing-function 规定速度效果的速度曲线。
    
    - transition-delay 过渡效果何时开始（延迟时间）。

2. transform：CSS转换，主要应用于元素的 2D 或者 3D转换，可以将元素 旋转、缩放、移动、倾斜等

    -  矩阵转换:matrix(n,n,n,n,n,n) matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
    
    -  移动转换:translate(x,y) translate3d(x,y,z) translateX(x) translateY(y) translateZ(z)
    
    -  缩放转换:scale(x[,y]?) scale3d(x,y,z) scaleX(x) scaleY(y) scaleZ(z)
    
    -  旋转转换:rotate(angle) rotate3d(x,y,z,angle) rotateX(x) rotateY(y) rotate(Z)
    
    -  倾斜转换:skew(x-angle,y-angle) skewX(x) skewY(y)
    
    -  元素透视:perspective(n)

3. animation：CSS动画，将元素的样式配置转换到另一个CSS配置。包括动画所使用的样式规则，以及用于指定动画开始、结束以及中间多个节点的关键帧

    -  animation-name 制定需要绑定的关键帧名称
    
    -  animation-duration 动画指定需要多少秒
    
    -  animation-timing-function 设置动画如何完成一个周期
    
    -  animation-delay 设置动画启动前延迟间隔
    
    -  animation-iteration-count  定义动画播放次数
    
    -  animation-direction 指定是否轮流反向播放动画
    
    -  animation-fill-mode 规定当动画不播放应用到元素上的样式
    
    -  animation-play-state 指定动画是否正在运行或暂停
    
    -  initial 设置属性为默认值
    
    -  inherit 从父元素继承属性
    
    
