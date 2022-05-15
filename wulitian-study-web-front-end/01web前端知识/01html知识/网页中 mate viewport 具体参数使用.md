# 网页中 mate viewport 具体参数使用

#### 精简回答：

1. width    设置 viewport 宽度，为一个正整数，或字符串‘device-width’

2. device-width  设备宽度

3. height   设置 viewport 高度，一般设置了宽度，会自动解析出高度，可以不用设置

4. initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数

5. minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数

6. maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数

7. user-scalable    是否允许手动缩放

```html
<meta
    name="viewport"
    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
```
