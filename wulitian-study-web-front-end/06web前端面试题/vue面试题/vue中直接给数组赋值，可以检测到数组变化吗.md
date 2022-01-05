# vue中直接给数组赋值，可以检测到数组变化吗

#### 精简回答：

1. 由于js限制不能检测数组变化

2. 为了解决这个问题vue.set（当前项，索引，新值）或者push,unshift,pop,shift,reverse,sort,splice vue中对这些方法重写了。





