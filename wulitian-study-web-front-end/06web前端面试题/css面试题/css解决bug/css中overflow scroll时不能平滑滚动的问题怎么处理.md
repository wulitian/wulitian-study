# css中overflow scroll时不能平滑滚动的问题怎么处理

#### 精简回答：

1.当设置div宽度，里面的内容不设置宽度时候；使用overflow: scroll是上下滚动，左右不滚动；设置内部的元素p超过父级的宽度；然后设置overflow: scroll是上下和左右都有滚动条；分别设置就可以了overflow-x:scroll;overflow-y:hidden;或者设置overflow后，在单独设置；overflow:auto;overflow-y:hidden;


