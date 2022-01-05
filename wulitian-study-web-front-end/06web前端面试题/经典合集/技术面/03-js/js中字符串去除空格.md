# js中字符串去除空格

#### 精简回答：

```js
String.prototype.trim = function () {
        let reg = /^\s+|\s+&/g;
        return this.replace(reg, '');
    }
```
