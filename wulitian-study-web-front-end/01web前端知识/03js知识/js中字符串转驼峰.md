# js中字符串转驼峰

#### 精简回答：

1. 匹配到_加后面的英文后charAt[1].toUpperCase()

```js
var str = 'border-bottom-color';
var strRg = str.replace(/\-[a-z]/g, function (params) {
  return params.charAt(1).toUpperCase();
})
console.log(strRg);
```
