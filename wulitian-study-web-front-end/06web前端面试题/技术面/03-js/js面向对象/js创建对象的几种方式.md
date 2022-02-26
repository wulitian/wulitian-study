# js创建对象的几种方式

#### 精简回答：

1.字面量方式

```js
let person={
  name:'雾里天',
  sex:'男',
  sayName:function(){
      alert(this.name)
  }
};
person.sayName();
```

2.工厂模式

```js
function createPerson(name,sex){
    var obj = new Object();
    obj.name = name;
    obj.sex=sex;
    obj.sayName = function(){
        alert(this.name)
    }
    return obj
}
let person = createPerson('雾里天','男');
```

3.构造函数模式

```js
var person = new Object();
person.name = '雾里天';
person.sex = '男';
person.sayName = function(){
    alert(this.name)
}
```

4.原型模式

```js
function Person(){}
Person.prototype.name = '雾里天';
Person.prototype.sex = '男';
Person.prototype.sayName = function(){
    alert(this.name)
}
var person =new Person();
person.sayName();
```

5.混合构造模式和原型模式

```js
function Person(name,sex){
    this.name = name;
    this.sex = sex;
}
Person.prototype.sayName = function(){
    alert(this.name)
}
var person =new Person('雾里天','男');
person.sayName();
```

6.动态原型模式

```js
function Person(name, sex) {  // 属性
  this.name = name;
  this.sex = sex;  // 方法
  if(typeof this.sayName !== 'function') {
    Person.prototype.sayName = function() {       
        alert(this.name)
    }
  }
}
let person = new Person('雾里天', '男');
person.sayName();
```

7.寄生构造模式

```js
function Person(name, sex){
    let obj = new Object();
    obj.name = name;
    obj.sex = sex;
    obj.sayName = function(){
        alert(this.name);
    }
return obj;
}
let person = new Person('雾里天','男');
person.sayName(); //"雾里天"
```

8.稳妥构造模式

```js
function Person(name, sex){
    let obj = new Object();
    obj.name = name;
    obj.sex = sex;
    obj.sayName = function(){
        alert(name);
    }
    return obj;
}
let person = new Person('雾里天','男');
person.sayName(); //"雾里天"
```

