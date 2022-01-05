// 命名空间（为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内）
namespace A{
    export let a:string = 'a'
}
namespace B{
    export let a:string = 'b'
}
console.log(A.a)

