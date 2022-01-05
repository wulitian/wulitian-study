# css中margin与padding使用场景

#### 精简回答：

1. margin使用场景：

- 需要在border外侧添加空白时

- 空白处不需要背景（色）时

- 上下两个盒子抵消空白时

2. padding使用场景

- 需要在border内测添加空白时

- 空白处需要背景（色）时

- 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。

3.兼容性：
- 在IE5.x、IE6中，为float的盒子指定margin时，左侧margin可能会变成两倍的宽度。通过改用padding或指定盒子为display:inline可以解决。
