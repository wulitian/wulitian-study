# js字符串的常用方法

#### 精简回答：

1.charAt 获取指定索引位置的字符

2.charCodeAt 获取指定索引位置的字符对应的ASCII码值

3.indexof/lastIndexof 获取某个字符串在第一次（最后一次）出现位置的索引，没有的话返回-1，我们通常用这个来检测字符串中是否包含某一个字符；

4.toUpperCase/tolowerCase将字符串中的字母转大写|小写；

5.split按照指定的分隔符，讲一个字符串拆分成数组，和数组的join对应；

6.substr：substr(n,m)从索引n开始截取m个字符，把截取字符返回一个新的字符串；

7.substring：substring(n,m)从索引n开始截取到索引m处（不包含m），将找到的字符返回成一个新的字符串；

8.slice：slice(n，m)和substring的用法和意思一样，只是slice可以支持负数作为索引，出现负数索引的时候，用字符串的长度+负数索引，例如：ary.slice(-6,-2)，其实是ary.slice(ary.length-6,ary.length-2)

9.Replace：replace(“要替换的老字符”,“替换成的新字符”)字符串中字符替换的方法，可以应用正则来统一的进行替换，在正则中我们会详细的讲解replace的强大应用；

10.Match：把所有和正则匹配到的内容都进行捕获（不能捕获小分组中的内容）

11.trim： 去掉字符串中末尾位置的空白字符（不兼容）


