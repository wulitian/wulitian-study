# js数组中的最大值

#### 精简回答：

1.利用max()

```js
let a = [3, 4, 6, 2, 9, 11, 4];
let maxNum = Math.max.apply(null, a);
console.log(maxNum);//11
```

2.利用排序

```js
ary.sort(function(a,b){return a-b})
console.log(ary[0]);
console.log(ary[ary.length-1]);
```
