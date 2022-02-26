# js中generator

#### 精简回答：

1. generator最大的特点就是可以交出函数的执行权，暂停执行

2. 函数多了*号表示generator函数，内部用yield关键字，他的执行和普通函数不一样不会直接返回return的值而是返回指针，通过调用指针的next方法调用它会执行一步任务返回值是对象包括value，done，value是yieid表达式的值，done表示是否执行完毕。
