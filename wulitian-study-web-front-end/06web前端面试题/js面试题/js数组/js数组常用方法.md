# js字符串的常用方法

#### 精简回答：

var a=new Array;

1.a.concat(arr1,…,arryN): 将arr1…arryN数组与a合并成一个新数组返回，原数组不变。

2.a.join(','):将数组转换为已逗号分隔的字符串

3.a.push(value):将value追加到a最后一项，a.length自动加1

4.a.pop():删除最后一项a.length自动减1

5.a.unshift(val):在a第0项插入val值，原数据项向后移位,a.length自动加1

6.a.shift():删除a第0项，a.length自动减1

7.a.reverse():将a中数据反转

8.a.slice(indexA,indexB):复制索引从indexA到indexB-1为一个新数组，原数组不变,不包括indexB项，通常这种传入2个索引的方法，第二个参数都不参与运算，indexB-1参与运算。

9.a.sort():对a进行排序，但排序是按照ASCII表排序，会将13排在2前面。如果想按照正常排序，如下：

```js
let a = [5, 67, 1, 2, 4];
a.sort(function (x, y) {
return x - y;
})
console.log(a);
```

10.splice(index,count,ele1,…,ele2);index是起始索引，count表示从index开始要删除的个数，后面的参数表示从index开始插入的值，例如：

```js
let a = [5, 67, 1, 2, 4];
a.splice(1, 2, 88, 99);
console.log(a);
```

11.改变数组的方法：操作原来数组

- push() pop() unshift() shift() reverse() sort() splice() 

12.不改变数组的方法：生成新数组或字符串

- concat() join() slice() toString()
