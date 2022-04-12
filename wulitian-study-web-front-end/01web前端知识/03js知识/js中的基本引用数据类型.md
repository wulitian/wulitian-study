# js中的基本引用数据类型

#### 日期（Date）

1. 介绍
var now = new Date();//自动获取当前日期和时间不传参，自动获取当前日期和时间；传参，则需要传入表示该日期的毫秒数（从1970.1.1~指定时间）。

2. Date.parse()介绍：时间转为毫秒数
参数：“月/日/年” “英文月名 日，年” “英文星期几 英文月名 日 年 时:分:秒:时区”，如Tue May 25 2004 00:00:00 GMT-0700
YYYY-MM-DDTHH:mm:ss.sssZ(如2004-05-25T00:00:00)。

3. Date.UTC()介绍：时间转为毫秒数

其入参分别是年份、月份（一月是0，二月是1...）、天（1~31）、小时数（0~23）、分钟、秒以及毫秒数 只有年和月是必需的。其余不填时，假设为月中天数为1，其他全都为0
Date构造函数可以直接接收Date.parse和Date.UTC的参数，它会在内部自动调用parse/UTC进行转换。

4. Date.now() 返回调用此方法时的毫秒数

var start = Date.now();

此方法不是所有浏览器支持。不支持的浏览器中，替代方案

var start = new Date();


#### 继承的方法：toLocaleString()、toString()、valueOf()

前两者在不同浏览器中展示的日期和时间格式不同，没有太多用处；valueOf()返回日期的毫秒，可以使用valueOf()比较日期早晚。

#### 一些常用方法


getTime() 返回表示日期的毫秒数，与valueOf()方法返回的值相同


getFullYear() 取得四位数的年份


getMonth() 返回日期中的月份，其中0表示一月


getDate() 返回月份中的天数（1~31）


getDay() 返回星期中的星期几（0~6）


getHours() 返回日期中的小时数（0~23）


getMinutes() 返回日期中的分钟数（0~59）


getSeconds() 返回日期中的秒数（0~59）


getMilliseconds() 返回日期中的毫秒数

#### 原始值包装类型

1 Boolean

Boolean的实例会重写valueOf()方法，返回一个原始值true或false。toString()方法被调用时也会被覆盖，返回字符串“true”或“false”。

2 Number

Number类型也重写了valueOf()、toLocalString()和toString()方法。valueOf()方法返回Number对象表示的原始数值，另外两个方法返回数值字符串。toString()方法可选地接收一个表示基数地参数，并返回相应基数形式地数值字符串

- toFixed()返回指定小数位的数值字符串。
- toExponential()返回以科学计数法表示的数值字符串。接收一个参数，表示结果中小数的位数。
- toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学计数法。这个方法接收一个参数，表示结果中数字的总位数。
- isInteger()用于辨别一个数值是否保存为整数。有时，小数位的0可能会让人误以为数值是一个浮点值。

3 String

a. 提取字符串方法

- slice()方法将所有负值参数都当成字符串长度加上负参数值

- substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数转换为0。

- substring()方法会将所有负参数值都转换为0。

- 对比：这三个方法都返回调用他们的字符串的子字符串，而且都接收一或两个参数。第一个参数表示子字符串开始的位置，第二个参数表示子字符串结束的位置。
对 slice()和 substring()而言，第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。
对 substr()而言，第二个参数表示返回的子字符串数量。

b. 提取字符串方法

indexOf()和lastIndexOf()两个方法从字符串中搜索传入的字符串，并返回下标（如果没找到，则返回-1），区别在于前者从字符串开头向后开始查找，后者从字符串末尾向前开始查找。
这两个方法都可以接收第二个参数，表示开始搜索的位置。

c. 字符串包含方法

3个用于判断字符串种是否包含另一个字符串的方法：startWith()、endWith()和incluedes()，都返回一个表示是否包含的布尔值。区别在于
- startWith()检查开始于索引0的匹配项
  
- endWith()检查开始于索引(string.length - substring.length)的匹配项
  
- includes()检查整个字符串

d. 字符串大小写转换

- toLowerCase()

- toLocaleLowerCase()

- toUpperCase()

- toLocaleUpperCase()

trim()方法

repeat()方法

padStart()与padEnd()方法

#### 单例内置对象

- Math.min() 用于确定一组数值中的最大值
- Math.max() 用于确定一组数值中的最小值
- Math.ceil() 方法始终向上舍入为最接近的整数
- Math.floor() 方法始终向下舍入为最接近的整数
- Math.round() 方法执行四舍五入
- Math.fround() 方法返回数值最接近的单精度（32位）浮点值表示
- Math.random() 方法返回一个0~1范围内的随机数，包括0但不包含1

- Global

事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成Global对象的属性。
window对象:浏览器将window对象时限为Global对象的代理，因此所有全局作用域中声明的变量和函数都变成了window的属性。