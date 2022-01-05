// 装饰器（写法：普通装饰器（无法传参） 、 装饰器工厂（可传参） 分类：类装饰器、属性装饰器、方法装饰器、参数装饰器，）

//1.1 类装饰器:普通装饰器（无法传参）
/*function logClass(params:any){

    console.log(params);
    // params 就是当前类
    params.prototype.apiUrl='动态扩展的属性';
    params.prototype.run=function(){
        console.log('我是一个run方法');
    }

}

@logClass
class HttpClient{
    constructor(){
    }
    getData(){

    }
}
var http:any=new HttpClient();
console.log(http.apiUrl);
http.run();*/

//1.2 类装饰器:装饰器工厂（可传参）
/*
 function logClass(params:string){
     return function(target:any){
         console.log(target);
         console.log(params);
         target.prototype.apiUrl=params;
     }
 }

 @logClass('http://www.itying.com/api')
 class HttpClient{
     constructor(){
     }

     getData(){

     }
 }

 var http:any=new HttpClient();
 console.log(http.apiUrl);

*/

// 2.1 类装饰器
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
/*function logClass(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any='我是修改后的数据';
        getData(){
            this.apiUrl=this.apiUrl+'----';
            console.log(this.apiUrl);
        }
    }
}


@logClass
class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}

var http=new HttpClient();
http.getData();*/

// 2.2 属性装饰器
// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
//     1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//     2、成员的名字。
/*
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(target);
        console.log(attr);
        target[attr]=params+'.wulitian';
    }
}
class HttpClient{
    @logProperty('http://itying.com')
    public url:any |undefined;
    constructor(){
    }
    getData(){
        console.log(this.url);
    }
}
var http=new HttpClient();
http.getData();
*/

// 2.3 方法装饰器
// 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
// 方法装饰会在运行时传入下列3个参数：
//     1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//     2、成员的名字。
//     3、成员的属性描述符。
/*function get(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl='xxxx';
        target.run=function(){
            console.log('run');
        }
    }
}

class HttpClient{
    public url:any |undefined;
    constructor(){
    }
    @get('http://www.itying,com')
    getData(){
        console.log(this.url);
    }
}

var http:any=new HttpClient();
console.log(http.apiUrl);
http.run();*/

// 2.4 方法参数装饰器
// 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 ，传入下列3个参数：
//  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//  2、方法的名字。
//  3、参数在函数参数列表中的索引。
function logParams(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.apiUrl=params;
    }
}

class HttpClient{
        public url:any |undefined;
        constructor(){
        }
        // @ts-ignore
        getData(@logParams('xxxxx') uuid:any){
            console.log(uuid);
        }
 }
let http:any = new HttpClient();
http.getData(123456);
console.log( http.apiUrl);
