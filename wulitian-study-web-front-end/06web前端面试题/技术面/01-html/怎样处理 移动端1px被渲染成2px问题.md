# 怎样处理 移动端1px被渲染成2px问题

#### 精简回答：

1. meta 标签中的 viewport 属性 ，initial-scale 设置为 1rem 按照设计稿标准走，外加利用 transfrome 的 scale(0.5) 缩小一倍即可； 2 全局处理

2. meta 标签中的 viewport 属性 ，initial-scale 设置为 0.5rem 按照设计稿标准走即可
