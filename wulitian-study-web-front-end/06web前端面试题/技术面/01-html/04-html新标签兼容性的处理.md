# html新增属性与移除的属性

### 精简回答：

####使用document.createElement：

1. IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签；浏览器支持新标签后，还需要添加标签默认的样式

####使用 html5shiv 框架

1. 是判断是否小于 IE9 以下浏览器，如果是就执行这段 JS 代码 ，如果不是，就忽略掉。


