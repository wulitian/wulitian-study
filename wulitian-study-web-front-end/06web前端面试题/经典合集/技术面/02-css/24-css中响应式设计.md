# css中响应式设计

#### 精简回答：

1. 什么是响应式：一个网站兼容多个终端而不是为每个终端都定制特定版本

2. 响应式基本原理：基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理

3. 响应式优点：面对不同分辨率设备灵活性强、能够快捷解决多设备显示适应问题。

4. 响应式缺点：兼容各种设备工作量大，效率低下、代码累赘，会出现隐藏无用的元素，加载时间加长、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果一定程度上改变了网站原有的布局结构，会出现用户混淆的情况。

5. 如何兼容低版本ie：media-queries.js 或 respond.js等

```html
<!--[if lt IE 9]> <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script> <![endif]-->
```

6. 响应式步骤：

- Meta 标签：为了适应屏幕，多数的移动浏览器会把HTML网页缩放到设备屏幕的宽度。你可以使用meta标签的viewport属性来设置。下面的代码告诉浏览器使用设备屏幕宽度作为内容的宽度，并且忽视初始的宽度设置。这段代码写在 <head>里面

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- html结构

- Media Queries:响应式网页设计的关键告诉浏览器如何根据特定的屏幕宽口来加载网页

```css
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
}
```
