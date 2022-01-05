// 类的定义，继承，修饰符，静态属性，静态方法，抽象类

// 1.类的定义
class Persion{
    constructor(n:string){
        this.name = n
    }
    name:string
    run():void{
        console.log(this.name)
    }
}
let p:Persion = new Persion('wulitian');
p.run()
// 2.类的继承extends super
class Wlt extends Persion{
    constructor(n:string){
        super(n)
    }
    run():void{
        console.log('子类run调用')
    }
}

// 出现同名方法先调用父类方法再调用子方法
let wlt:Wlt = new Wlt('wulitian');
wlt.run()

// 3.修饰器public(公有：当前类，子类，外部可以访问),protected（保护：当前类，子类可以访问）,private（私有：当前类可以访问）不写默认为public

// 4.静态属性，静态方法（ static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。）
class StaticMem {
    static num:number;

    static disp():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}
StaticMem.num = 10
StaticMem.disp()

// 5.抽象类（用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现, abstract抽象方法只能放在抽象类里面）
abstract class Car {
    abstract run():any;
    play(){
        console.log('小汽车放着歌')
    }
}

class Ad extends Car{
    run(): any {
        console.log('奥迪车跑了')
    }
}
let ad = new Ad();
ad.run()
ad.play()
