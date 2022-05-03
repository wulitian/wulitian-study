# js中的script标签属性

#### script元素

1. 标签属性

- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。 
- charset：可选。使用src属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。 
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7及更早的版本中，对行内脚本也可以指定这个属性。 
- integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。 
- language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。 
- src：可选。表示包含要执行的代码的外部文件。  视频讲解 图灵社区会员 aSINKz(1561821892@qq.com) 专享 尊重版权12 第2章 HTML中的JavaScript  
- type：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript文件的MIME类型通常是"application/x-javascript"，不过给type属性这个值有可能导致脚本被忽略。在非IE的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是module，则代 码会被当成ES6模块，而且只有这时候代码中才能出现import和export关键字。

2 注意事项

- 在行内脚本中出现console.log("</script>")会导致代码提前结束。
- <script src="example.js"/>在html中不能正常使用。在xhtml中可以。
- 在标签上引用外部资源，同时也再行内书写代码，这是行内代码不会执行。
- 为了保证加载js文件是预期的文件可以加入integrity属性。
- 执行顺序，从上到小依次执行，如果设置了defer和async就不一定了，后一个必须等到前一个解释完成才能继续开始解释。

2. 标签位置

- 应用js通常放在body最后，放置阻塞页面导致白屏。

2. 推迟执行脚本

- 设置defer后，浏览器会立即下载但是延迟执行，多个defer脚本第一个推迟的脚本会在第二个推迟的脚本之前执行，最好保证只有一个异步脚本，并且最好也放在页面body最下方,因为有些浏览器可能忽略这个属性，因为ie8之前不支持。

3. 异步执行脚本

- 多个异步脚本标记async，不能保证他们的加载次序，异步脚本不应该在加载期间修改dom。

4. 动态加载脚本

- 可以通过动态生成script标签加载js，该种方式相当于async标记，不过这种方式会导致性能降低，适用这种方式最好页面前面加入<link rel="preload" href="demo.js">进行预加载。

5. XHTML中的变化

- 必须指定type类型text/javascript，其中在xhtml中使用符号需要转义，或者使用CDATA+注释形式。
```xhtml
<script type="text/javascript"> 
    //<![CDATA[  
    function compare(a, b) {  
        if (a < b) {  
            console.log("A is less than B");  
        } else if (a > b) {  
            console.log("A is greater than B");  
        } else {  
            console.log("A is equal to B");  
        }  
    } 
    //]]> 
</script> 
```

#### 行内代码与外部文件

- 可维护性：一个目录保存js文件更易于维护。

- 缓存：多个页面加载一个js只需加载一次，这样页面加载更快。

- 适用未来：http1,与http1.2版本大文优势最大，http2版本中拆分多个文件优势更大。

#### 文档模式

- 混杂模式
  
- 标准模式
  
- 准标准模式

#### noscript元素

当浏览器不支持脚本或者浏览器脚本被关掉时就会执行moscript内的内容。




