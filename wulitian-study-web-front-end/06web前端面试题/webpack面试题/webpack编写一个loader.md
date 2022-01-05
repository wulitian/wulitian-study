# webpack编写一个loader

#### 精简回答：

1. loader 就是⼀个 node 模块，它输出了⼀个函数。当某种资源需要⽤这个 loader 转换时，这个函数会被调⽤。并且，这个函数可以通过提供给它的 this 上下⽂访问 Loader API 。


