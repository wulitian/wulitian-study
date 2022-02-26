# js事件兼容性问题

#### 精简回答：

1.事件对象本身

  - 标准浏览器是发生时自动给方法传一个实参，IE是全局的window.event
  
  - 解决方法：e = e || window.event

2.事件源

  - 标准浏览器是e.target，IE下是e.srcElement
    
  - 解决办法是：let target = e.target || e.srcElement
  
3.DOM二级事件绑定

  - 标准浏览器是element.addEventListener，IE下是element.attachEvent:
  
```js
    if(ele.addEventListener){
        //....
    }else if(ele.attachEvent){
        //....
    }
```
  - 相应的解除绑定方法是removeEventListener 和 IE的 detachEvent
  
4.阻止事件传播

  - 标准浏览器是e.stopPropagation，IE是e.cancelBubble = true这个属性

5.阻止默认行为

  - 标准浏览器是e.preventDefault() 方法，IE是e.returnValue = false
  
6.相对于文档的鼠标坐标

  - 标准浏览器是e.pageX，e.pageY，但IE不支持这两个属性，但都支持clientX，clientY，这是相对于浏览器的鼠标坐标，可以通过scrollTop+clientY来实现。

```js
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
```


