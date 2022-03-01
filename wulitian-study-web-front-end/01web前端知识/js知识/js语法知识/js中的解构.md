# js中的解构

#### 解构对象

1. 解构基础对象

```js
const Car = {name: "奔驰",price: 100000}
const {name, price} = Car;
```

2. 解构没有声明的对象

```js
const {name, price} = {name: "奔驰",price: 100000};
```

3. 解构对象并重命名

```js
const {name:n, price:p} = {name: "奔驰",price: 100000};
```

4. 解构默认值

```js
const {name:n = '奔驰', price:p = 200000} = {name: "奔驰",price: 100000};
```

5. 解构函数参数

```js
const {name:n = '奔驰', price:p = 200000} = {name: "奔驰",price: 100000};

function run({n}){
    console.log(n+"跑起来")
}
```

6. 解构嵌套对象

```js
const {introduce:{info}}= {name: "奔驰",price: 100000, introduce:{info: '这种车贼贵'}};

```

#### 解构数组

1. 解构基础数组

```js
const [a,b] = ['大众', '宝马'];
```

2. 解构默认值

```js
const [a,b="宝马"] = ['大众', '宝马'];
```

3. 在解构中交换变量

```js
let a = '大众';
let b = '宝马';
[b,a] = [a,b]
```

4. 解构函数返回值

```js
function getCar(){
    return ['大众', '宝马', '奔驰'];
}
let a,b,c;
[a,b,c] = getCar();
```
