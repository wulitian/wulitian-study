# js事件冒泡捕获机制

#### 精简回答：

1.事件冒泡：从事件源向着父级dom一直传递知道document，当某个元素的某类型事件触发时，那么他父元素同类型时间也出发（其中不是所有事件都会传播如：onfocus,onblur,onmouseenter,onmouseleave，）

2.事件捕获：从根元素（html）到事件源，当某个元素某类型事件被触发时，先触发根元素事件，向着子元素触发直至事件源

3.事件委托或代理：利用dom传播机制可以给document绑定一个事件，在事件中获取事件源；根据不同的事件源做不同的事情（不用一一绑定事件）

```
    document.onclick=function(e){
        e=e||window.event;
        var  target=e.targrt||e.srcElement;//获取事件源是关键；
        alert(target.nodeName);
        return false;
    }
```

4.DOM0 DOM2 DOM3

- ​    DOM0为0级DOM

​        一是在标签内写onclick事件
        二是在JS写onlicke=function（）{}
        特点：事件会覆盖

- ​    DOM2为2级DOM

​       监听方法，原生有两个方法用来添加和移除事件处理程序：addEventListener()和removeEventListener()。IE下的DOM2事件通过attachEvent绑定和 detachEvent 进行移除事件，他们接收的参数都一样。事件执行过程以及写法有所不同
        注意： IE9及之后的版本都能兼容 addEventListener了
        addEvenetListener()、removeEventListener() 有三个参数：
        第一个参数是事件名（如click, IE是 onclick）；
        第二个参数是事件处理程序函数；
        第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用。
        这里我们不需要传入第三个参数，因为IE8级以下版本只支持冒泡型事件。
        addEventListener(‘onclick’, handle):可以为元素添加多个事件处理程序，触发时会按照添加顺序依次调用。
        removeEventListener(‘onclick’, handle):不能移除匿名添加的函数。
        特点：事件不会覆盖依次执行

- ​    DOM3为3级DOM  

​        DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：

- ​    为什么没有DOM1级事件处理呢？因为1级DOM标准中并没有定义事件相关的内容

| 事件类型 | 说明                                  | 举例               |
| -------- | ------------------------------------- | ------------------ |
| UI事件   | 当用户与页面上的元素交互时触发        | load、scroll       |
| 焦点事件 | 当元素获得或失去焦点时触发            | blur、focus        |
| 鼠标事件 | 当用户通过鼠标在页面执行操作时触发    | dbclick、mouseup   |
| 滚轮事件 | 当使用鼠标滚轮或类似设备时触发        | mousewheel         |
| 文本事件 | 当在文档中输入文本时触发              | textInput          |
| 键盘事件 | 当用户通过键盘在页面上执行操作时触发  | keydown、keypress  |
| 合成事件 | 当为IME（输入法编辑器）输入字符时触发 | compositionstart   |
| 变动事件 | 当底层DOM结构发生变化时触发           | DOMsubtreeModified |

5.阻止事件冒泡

```
    e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();//其它浏览器
        }else{
            e.cancelBubble=true;//IE浏览器
        }
```

6.阻止默认事件
```
   e.preventDefault();
```


