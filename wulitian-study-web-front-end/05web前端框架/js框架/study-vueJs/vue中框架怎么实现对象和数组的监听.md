# vue中框架怎么实现对象和数组的监听

#### 精简回答：

1. 遍历数组，递归对象，调用object.defineProperty,数组重写了push,unshift,pop,shift,splice,sort,reverse，等，其中初始化数据后判断是数组，还是对象如果是对象，遍历对象判断每一项还是不对象是对象继续监测，不是对象直接定义数据响应式object.defineProperty，如果是数组，遍历数组通过索引取值，判断值是数组还是对象如果都不是，观测数据进行响应式。







