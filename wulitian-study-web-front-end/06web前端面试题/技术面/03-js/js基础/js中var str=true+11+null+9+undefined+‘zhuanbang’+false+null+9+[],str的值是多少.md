# js中var str=true+11+null+9+undefined+‘zhuanbang’+false+null+9+[],str的值是多少

#### 精简回答：

1. 结果为 NaNzhuanbangfalsenull9

```js
console.log(true + 11);//true转化为1，结果为12
console.log(true + 11 + null);//null转化为0，结果为12
console.log(true + 11 + null + 9);//12+9=21
console.log(true + 11 + null + 9 + undefined);//21 + undefined = NaN
console.log(true + 11 + null + 9 + undefined + "zhuanbang");//‘NaN’ + ‘zhuanbang’ = ‘NaNzhuanbang’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false);//‘NaNzhuanbang’ + ‘false’ = ‘NaNzhuanbangfalse’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null);//‘NaNzhuanbangfalse’ + ‘null’ =‘NaNzhuanbangfalsenull’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9);//‘NaNzhuanbangfalsenull’ + ‘9’ = ‘NaNzhuanbangfalsenull9’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9 + []);//‘NaNzhuanbangfalsenull9’ + ’ ’ = ‘NaNzhuanbangfalsenull9’
```
