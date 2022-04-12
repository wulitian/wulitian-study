# js中字符串反转

#### 精简回答：

```js
 String.prototype.reverse = function(){
   return this.split('').reverse().join("")
}
```
