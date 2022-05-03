# js中去除连续重复字符

#### 精简回答：

1. 判断当前索引字符与后面的是否相等如果不相等就加上

```js
function removeRepetition (str) {
  if (str != '') {
    var result = str[0];
    for (var i = 1; i < str.length; i++) {
      if (str[i] != str[i - 1]) {
        result += str[i];
      }
    }
  }
  else result = '';
  return result;
}
```
