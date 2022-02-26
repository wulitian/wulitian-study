# js中判断是否有数字字母组成

#### 精简回答：

```js
function checkPassWord (nubmer) {
  var re = /^[0-9a-zA-Z]*$/;  //判断字符串是否为数字和字母组合
  if (!re.test(nubmer)) {
    return false;
  } else {
    return true;
  }
}
```
