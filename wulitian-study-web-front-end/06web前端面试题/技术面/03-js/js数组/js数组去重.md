# js数组去重

#### 精简回答：

1.原数组的第一个元素放到新数组中，便利与原数组比较，如果不同则存放在新数组中。

2.利用sort() 数组排序相邻的比较，如果不同则存放在新数组中

3.利用对象属性唯一性，如果没有这个属性则存储到新的数组中

4.利用indexOf 

5.利用lastIndexOf

6.利用includes

 - 利用filter+includes
 
 - 利用forEach+includes
 
 - 利用reduce+includes

7.利用数组原型上的splice

8.利用hasOwnProperty

9.利用map

10.利用ES6中的set方法
