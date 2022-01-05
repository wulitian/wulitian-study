# js中setInterval和setTimeout

#### 精简回答：

1.window.setInterval(fn,1000);//每隔1000ms执行一次fn方法,不会停止。

2.window.setTimeout(fn,1000);//1000ms后只运行一次fn方法，虽然只运行一次，可以递归调用自身模拟setInterval方法。

```js
window.setTimeout(fn, 1000 * 1)
function fn () {
  console.log(Date.now());
  fn();
}
```
