# js中DOM创建元素，添加元素，移动元素，复制节点，删除，替换元素，查找节点的方法

#### 精简回答：

1.创建元素document.creatElement(标签)

2.添加元素parent.appendChild(childNode);

3.移动元素dom中操作元素appendChild和insertBefore是将dom节点移动到目标处（dom对象为引用类型）

4.复制节点oli.cloneNode(true)参数true表示深度克隆（深拷贝），false 表示浅度克隆（浅拷贝），深拷贝也就是复制节点及整个节点数；浅拷贝复制节点本身。复制后返回的节点副本属于文档所有，但并没有为它指定父节点。因此，整个节点副本就成为一个‘孤儿’：

5.删除节点parentNode.removeChild(childNode);

6.parentNode.replaceChild(newNode,oldNode);

7.parentNode.insertBefore(newEle, oldNode);

8.查找节点

- childNodes返回节点到子节点列表；

- firstChild—返回节点的首个子节点;

- lastChild—返回节点的最后一个子节点;

- nextSibling—返回节点之后紧跟的同级节点;

- nodeName—返回节点的名字，根据其类型;

- nodeType—返回节点的类型;

- nodeValue—设置或返回节点的值，根据其类型;

- ownerDocument—返回节点的根元素（document对象）;

- parentNode—返回节点的父节点;

- previousSibling—返回节点之前紧跟的同级节点;

- text—返回节点及其后代的文本（IE独有）;

- xml—返回节点及其后代的XML（IE独有）;

9.节点对象的方法

- appendChild()—向节点的子节点列表的结尾添加新的子节点;

- cloneNode()—复制节点;

- hasChildNodes()—判断当前节点是否拥有子节点;

- insertBefore()—在指定的子节点前插入新的子节点;

- normalize()—合并相邻的Text节点并删除空的Text节点;

- removeChild()—删除（并返回）当前节点的指定子节点;

- replaceChild()—用新节点替换一个子节点;

10.IE6独有方法

- selectNodes()—用一个XPath表达式查询选择节点;

- selectSingleNode()—查找和XPath查询匹配的一个节点;

- transformNode()—使用XSLT把一个节点转换为一个字符串。transformNodeToObject()—使用XSLT把一个节点转换成为一个文档。

11.创建新节点方法

- createDocumentFragment() //创建一个DOM片段

- createElement() //创建一个具体的元素

- createTextNode() //创建一个文本节点

12.添加、移除、替换、插入方法

- appendChild()

- removeChild()

- replaceChild()

- insertBefore() //在已有的子节点前插入一个新的子节点

13.查找方法

- getElementsByTagName() //通过标签名称

- getElementsByName() //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

- getElementById() //通过元素Id，唯一性
