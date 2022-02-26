# js延迟加载

#### 精简回答：

```js
<script id="wulitian"></script> 
<script> 
    setTimeout(document.getElementById('wulitian').src='include/index.js',3000);//延时3秒 
</script> 
```
1. 让JS最后加载方案

2. defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack，用的最多）、按需异步载入js
