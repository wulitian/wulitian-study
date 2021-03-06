# svg与canvas区别

#### 精简回答

1. SVG Canvas 绘制后记忆，换句话说任何使用 SVG 绘制的形状都能被记忆和操作，浏览器可以再次显示 Canvas 则是绘制后忘记，一旦绘制完成你就不能访问像素和操作它 SVG 对于创建图形例如 CAD 软件是良好的，一旦东西绘制，用户就想去操作它 Canvas 则用于绘制和遗忘类似动漫和游戏的场画。

   为了之后的操作，SVG 需要记录坐标，所以比较缓慢。

   因为没有记住以后事情的任务，所以 Canvas 更快。

   | Canvas                                                       | SVG                                                          |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 通过 JavaScript 来绘制 2D 图形                               | 是一种使用 XML 描述 2D 图形的语言                            |
   | 是HTML5提供的新元素`<canvas>`                                | 历史久远，并不是HTML5转悠的标签                              |
   | 位图（标量图），放大或改变尺寸会失真；逐像素进行渲染，依赖分辨率 | 矢量图，放大或改变尺寸不会失真；不依赖分辨率                 |
   | 弱的文本渲染能力（因为放大会失真）                           | 最适合带有大型渲染区域的应用程序，比如谷歌地图（因为放大不会失真） |
   | 能够以 .png 或 .jpg 格式保存结果图像；能够引入 .png 或 .jpg格式的图片 | 不能以 .png 或 .jpg 格式保存结果图像；不能引入 .png 或 .jpg格式的图片 |
   | 不支持事件处理器（一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。） | 支持事件处理器（SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。） |
   | 不能被引擎抓取                                               | 可以被引擎抓取                                               |
   | ---                                                          | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）      |
   | 最适合图像密集型的游戏，其中的许多对象会被频繁重绘           | 不适合游戏应用                                               |
