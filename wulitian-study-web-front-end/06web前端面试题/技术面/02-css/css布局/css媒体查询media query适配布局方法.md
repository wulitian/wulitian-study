# css媒体查询media query适配布局方法

#### 精简回答：

| 特性名                                                       | 值                                                    | 应用场景                                                     |
| ------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------ |
| width min-width max-width                                    | 显示区域的宽度（对打印机而言是打印表面）              | 改变布局以适应非常窄（如手机）或非常宽的显示器。             |
| height min-height max-height                                 | 显示区域的高度                                        | 改变布局以适应非常长或非常短的显示器                         |
| device-width min-device-width max-device-width               | 当前计算机或设备屏幕的宽度（或打印输出时纸面的宽度）  | 根据不同设备（如手机）调整布局                               |
| device-height min-device-height max-device-height            | 屏幕或纸面的高度                                      | 根据不同设备（如手机）调整布局                               |
| orientation                                                  | landscape（横向）或portrait（纵向）                   | 根据设备的朝向调整布局                                       |
| device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio | 显示区域的宽高比（1/1是正方形）                       | 根据窗口形状调整样式（问题可能比较复杂）                     |
| color min-color max-color                                    | 屏幕颜色的位深（1位表示黑白，目前主流显示器都是24位） | 检查是否支持彩色输出（比如是不是黑白打印）， 或者支持的颜色数量 |

1. 媒体查询常用属性:max-device-width：用于创建手机版网站,max-width：用于针对窗口宽度设定不同的样式orientation：用于根据平板电脑或iPad的横向或者竖向来改变布局

2. 媒体查询高级条件:

- 使用 and 关键字拼接媒体查询块
```css
/** 正常样式 **/
 
@media (min-width: 600px) and (max-width: 700px) {
    /** 窗口宽度在600-700像素的样式 **/
}
 
@media (min-width: 500px) and (max-width: 599.99px) {
    /** 窗口宽度在500-600像素的样式 **/
}
 
@media (max-width: 499.99px) {
    /** 窗口宽度小于500像素的样式 **/
}
```
- 使用 not 关键字（下面这个功能效果与上面那个一样）
```css
/** 正常样式 **/
@media (not max-width: 600px) and (max-width: 700px) {
    /** 窗口宽度在600-700像素的样式 **/
}
 
@media (not max-width: 500px) and (max-width: 600px) {
    /** 窗口宽度在500-600像素的样式 **/
}
 
@media (max-width: 500px) {
    /** 窗口宽度小于500像素的样式 **/
}
```
- 替换整个样式表
```html
<head>
  <link rel="stylesheet" media="(min-width: 568.01px)" href="hangge.css">
  <link rel="stylesheet" media="(max-width: 568px)" href="hangge_small.css">
<!--[if lt IE 9]>
    <link rel="stylesheet" href="hangge.css">
  <![endif]-->
</head>
```
- 识别特定的移动设备
使用 max-device-width 可以区别普通计算机和移动设备。根据经验，将 max-device-width 设置为568像素就能够涵盖目前的iPhone和Android手机（不管横向还是竖向）：注意：对于高分辨率屏幕的手机上面规则也是适用的，这是由于高分屏手机引入像素比（pixel ratio）。以iPhone5为例，虽然它的物理像素是：640像素*1136像素，但它的像素比是2（两个物理像素对应一个CSS像素）。因此其声明的CSS像素是：320像素*568像素。
```html
<link rel="stylesheet" media="(max-device-width: 568px)" href="hangge_mpbile.css">
```
- 检测平板
对于iPad等平板，用户经常会改变方向。改变方向虽然会改变 max-width，但不会改变 max-device-width。 无论竖向还是横向，iPad始终报告自己的设备宽度为768像素。所以我们要组合使用 max-device-width 和 orientation 属性，以便区别iPad的方向应用不同的样式：

```html
<link rel="stylesheet"
    media="(max-device-width: 768px) and (orientation: portrait)"
    href="iPad_portrait.css">
<link rel="stylesheet"
    media="(max-device-width: 768px) and (orientation: landscape)"
    href="iPad_landscape.css">
```
