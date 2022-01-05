# js中获取style值

#### 精简回答：

```js
if(window.getComputedStyle){
  return window.getComputedStyle(ele,null);//标准浏览器
}else{
  ele.currentStyle;//currentStyle是IE的属性
}
```
