# js中数组常用的方法

#### 精简回答：

es5

- 改变数组的方法：push(),unshift(),pop(),shift(),splice(),sort(),reverse()

- 不改变数组的方法：slice(),concat(),slice(),join(),indexOf(),lastIndexOf(),filter(),map(),every(),some(),forEach(),find(),findIndex(),includes()

1. push()后增：末尾添加返回长度

2. unshift()前增：首部添加返回长度

3. pop()后删：尾部删除返回被删除元素

4. shift()前删：首部删除返回删除的元素

5. splice()修改删除：对数组进行删除返回删除元素组成的数组

6. slice()剪切：返回新数组

7. concat()拼接：合并数组返回新数组

8. join()转字符串：不改变原数组，返回转换后的字符

9. sort()排序：按照ascii码排序，返回排序后的数组

10. reverse()翻转：返回颠倒后的数组

11. indexOf(某元素，startIndex) 返回找到的index没有找到返回-1
- 从startIndex开始，查找某元素在数组中的位置，若存在，则返回第一个位置的下标,否则返回-1

12. lastIndexOf()和indexOf()相同，区别在于从尾部向首部查询

13. filter()过滤：方法返回数组中满足条件的元素组成的新数组

14. map() 格式化数组：根据需求格式化原数组，返回格式化后的数组

15. every()全满足： 对数组的每一项都运行给定的函数，若每一项都返回 ture,则返回 true。

16. some()存在满足：对数组的每一项都运行给定的函数，若存在一项或多项返回 ture,则返回 true。

17. forEach()遍历：中途不能中断，没有返回值。

es6

1. find()查找第一个元素：找到数组中第一次满足条件的元素，找不到返回undefined

2. findIndex()查找第一个索引：返回第一个满足条件的下标，并停止寻找

3. includes()包含：判断是否包含返回布尔

4. Array.isArray()数组判断：判断是是否是数组返回布尔
