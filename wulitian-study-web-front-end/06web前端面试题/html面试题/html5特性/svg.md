# svg

#### 精简回答

1. SVG 表示（scalable vector graphics）可缩放矢量图形。这是一个基于文本的图形语言，它可以绘制使用文本、线、点等的图形，因此可以轻巧又快速地渲染。SVG 意为可缩放矢量图形（Scalable Vector Graphics）。SVG 使用 XML 格式定义图像。SVG 是 XML 语言的一种形式，有点类似 XHTML，它可以用来绘制矢量图形，例如右面展示的图形。SVG 可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。图形和其组成部分可以变形，可以合成，还可以通过滤镜完全改变外观。

2. SVG 可以成为任何复杂的组合图形。SVG 支持渐变、旋转、滤镜效果、JavaScript 接口等等功能，但是所有这些额外的语言特性，都需要在一个定义好的图形区域内实现。

```html
<h1>My first SVG</h1>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle
        cx="100"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="red" />
</svg>
```
