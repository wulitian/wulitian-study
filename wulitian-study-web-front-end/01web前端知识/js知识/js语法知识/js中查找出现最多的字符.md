# js中查找出现最多的字符

#### 精简回答：

```js
let str = 'abcdefgaaaaaaddda';
let obj = {};
let arr = [];
let letter;
for(let i = 0,len = str.length;i<len;i++){
   letter = str[i];
   if(!obj[letter]){
     obj[letter] = 1;
   }else{
     obj[letter]++;
   }
}
let max_key,max_num=0;
for(key in obj){
   if(max_num <obj[key]){
     max_num = obj[key];
     max_key = key;
   }
}; 
```
