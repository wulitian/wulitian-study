// 暴露函数
function fun1(str:string):void {
    console.log(str)
}

function fun2():void {
    console.log('fun2')

}

function fun3(){
    console.log('fun3');
}

// 暴露变量
export let str:string = '123'

// 暴露类
export class Person{
    private name:string='wulitian'
    getName():string{
        return this.name
    }
}

export {fun1,fun2}

// export default fun3
