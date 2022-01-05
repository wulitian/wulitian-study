# css常用的hack有哪些

#### 精简回答：

1. 大部分特殊字符IE浏览器支持，其他主流浏览器firefox，chrome，opera，safari不支持 (opera可识别除外)。

2. \9    ：所有IE浏览器都支持

3. _和-  ：仅IE6支持

4. '* '  ：IE6、E7支持

5. \0    ：IE8、IE9支持，opera部分支持

6. \9\0  ：IE8部分支持、IE9支持

7. \0\9  ：IE8、IE9支持

8. IE的if条件

```html
<!–[if IE]> Only IE <![endif]–> //所有的IE可识别 
<!–[if IE 5.0]> Only IE 5.0 <![endif]–> //只有IE5.0可以识别 
<!–[if lt IE 6]> Only IE 6- <![endif]–> //仅IE6可识别 
<!–[if lte IE 7]> Only IE 7/- <![endif]–> //仅IE7可识别 
<!–[if gte IE 6]> Only IE 6/+ <![endif]–> //IE6以及IE6以下的IE5.x都可识别 
```
