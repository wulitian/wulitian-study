# js中的继承

#### 精简回答：

```js
 // 定义一个动物类
    function Animal (name) {
        // 属性
        this.name = name || 'Animal';
        // 实例方法
        this.sleep = function(){
            console.log(this.name + '正在睡觉！');
        }
    }
    // 原型方法
    Animal.prototype.eat = function(food) {
        console.log(this.name + '正在吃：' + food);
    };
```
1.原型链继承

- 核心： 将父类的实例作为子类的原型

- 特点：

     1.非常纯粹的继承关系，实例是子类的实例，也是父类的实例
     
     2.父类新增原型方法/原型属性，子类都能访问到
     
     3.简单，易于实现
     
- 缺点：

     1.要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
     
     2.无法实现多继承
     
     3.来自原型对象的所有属性被所有实例共享（来自原型对象的引用属性是所有实例共享的）
     
     4.创建子类实例时，无法向父类构造函数传参
     
```js
function Cat(){
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true
```

2.构造继承

- 核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

- 特点：

    解决了1中，子类实例共享父类引用属性的问题
    
    创建子类实例时，可以向父类传递参数
    
    可以实现多继承（call多个父类对象）
    
- 缺点：

    实例并不是父类的实例，只是子类的实例
    
    只能继承父类的实例属性和方法，不能继承原型属性/方法
    
    无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
    
```js
function Cat(name){
    console.log(this)
    Animal.call(this);
    this.name = name || 'Tom';
}
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```

3.实例继承

- 核心：为父类实例添加新特性，作为子类实例返回

- 特点：

     不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
     
- 缺点：

     实例是父类的实例，不是子类的实例
     
     不支持多继承
     
```js
 function Cat(name){
        var instance = new Animal();
        instance.name = name || 'Tom';
        return instance;
    }
    // Test Code
    var cat = new Cat();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat); // false
```

4.拷贝继承

- 特点：

    支持多继承
    
- 缺点：

    效率较低，内存占用高（因为要拷贝父类的属性）
    
    无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
    
```js
function Cat(name){
    var animal = new Animal();
    for(var p in animal){
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```

5.组合继承

- 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

- 特点：

    弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
    
    既是子类的实例，也是父类的实例
    
    不存在引用属性共享问题
    
    可传参
    
    函数可复用
    
- 缺点：

    调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
    
    推荐指数：★★★★（仅仅多消耗了一点内存）
    
```js
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
```

6.寄生组合继承

- 核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

- 特点：堪称完美

- 缺点：实现较为复杂

```js
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
})();
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
Cat.prototype.constructor = Cat; // 需要修复下构造函数
```

7.class继承

```js
class Person {
  //调用类的构造方法
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //定义一般的方法
  showName () {
    console.log("调用父类的方法")
    console.log(this.name, this.age);
  }
}
let p1 = new Person('kobe', 39)
console.log(p1)
//定义一个子类
class Student extends Person {
  constructor(name, age, salary) {
    super(name, age)//通过super调用父类的构造方法
    this.salary = salary
  }
  showName () {//在子类自身定义方法
    console.log("调用子类的方法")
    console.log(this.name, this.age, this.salary);
  }
}
let s1 = new Student('wade', 38, 1000000000)
console.log(s1)
s1.showName()     
```
</script>
