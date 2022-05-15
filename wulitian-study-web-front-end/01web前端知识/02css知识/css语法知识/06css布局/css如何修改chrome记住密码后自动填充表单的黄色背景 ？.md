# css如何修改chrome记住密码后自动填充表单的黄色背景 ？

#### 精简回答：

1. chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的input表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：
```css
input:-webkit-autofill {
    background-color: #FAFFBD;
    background-image: none;
    color: #000;
}
```

2. input文本框是纯色背景的:可以对input:-webkit-autofill使用足够大的纯色内阴影来覆盖input输入框的黄色背景,如果你有使用圆角等属性，或者发现输入框的长度高度不太对，可以对其进行调整，除了chrome默认定义的background-color，background-image，color不能用!important提升其优先级以外，
```css
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        border: 1px solid #CCC!important;
        height: 27px!important;
        line-height: 27px!important;
        border-radius: 0 4px 4px 0;
    }
```
3. input文本框是使用图片背景的:只能取消自动填写功能(在form标签上直接关闭了表单的自动填充功能：autocomplete=“off”。或者通过js)
```js
$(function() {
      if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        $(window).load(function(){
          $('ul input:not(input[type=submit])').each(function(){
            var outHtml = this.outerHTML;
            $(this).append(outHtml);
          });
        });
      }
    });
```
    
