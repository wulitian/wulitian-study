# js中事件

#### 精简回答：

1. dom0

- （0级dom事件）标签上onclick，js中写onclick，事件会覆盖

2. dom2

- 添加事件监听attachEvent(ie9以下)参数：（1，事件名称,2，时间处理函数）支持吃冒泡，执行顺序：从上到下

- 添加事件监听addEventListener（ie9及以上）参数：（1，事件名称,2，时间处理函数,3，true表示捕获阶段，false冒泡阶段这个参数不传就是冒泡方式监听）执行顺序：从下到上

- 移除事件监听detachEvent（ie9以下）

- 移除事件监听removeEventListener（ie9及以上）

- 参数（1，事件名称,2，时间处理函数,3，true表示捕获阶段，false冒泡阶段这个参数不传就是冒泡方式监听）

3. dom3（3级dom事件）

事件如：UI事件(用户与页面交互触发scroll,load)，焦点事件（获取失去焦点blur，focus）鼠标事件（通过鼠标页面执行触发dbclick,mousewheel）文本事件（在文档中输入文本时触发textInput）键盘事件（通过键盘触发keydown,keypress）合成事件（输入字符时触发compositionstart）变动事件（dom结构变换时触发DOMsubtreeModified）

4. dom事件流

- 事件的冒泡:一层一层往上冒知道最外层html,document，阻止冒泡事件对象中有一个stopPropagation()，return false,(组织默认行为事件对象有一个方法preventDefalut,事件目标srcElement) （ie阻止冒泡cancelBubble = true，组织默认行为returnValue = false,事件目标targer）

- 事件的捕获:与冒泡相反

5. 事件对象event

- 当事件触发时，当前这个事件的一些基本信息（事件元素，事件类型等）会被保存在event对象中，ie8及以下event必须作为window对象，

6. 事件循环event loop

- js是单线程的语言，js最一开始执行的线程，是主线程，然后主线程执行完毕后，是微任务 microtask 的循环执行，微任务执行完毕后，在执行宏任务 macrotask；

- 宏任务script,MacroTask（setTimeout ,setInterval,setImmediate ,I/O,UI rendering）

- 微任务MicroTask(promise.then,process.nextTick)

- 同步任务syncTask

- 异步任务asyncTask

7. 事件代理模式：

- 事件代理原理就是利用事件冒泡机制，可以委托父元素处理，解决了事件的多次注册，如果注册量比较大影响性能

- 优点：节约内存占用，减少事件注册，新增子对象无序增加事件绑定，删除也不需要解绑

- 缺点：不能把所有的事件都监听，容易混乱，只适用于支持冒泡的事件如onclick

- 无法代理，不支持冒泡的事件如：mouseleave & mouseenter,blur & focus

- 如何让事件先冒泡再捕获：标准的事件模型是先捕获后冒泡，要想实现先冒泡后捕获可以让捕获暂缓执行。
