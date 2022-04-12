// 1.案例一:
// var foo = () => {
//   console.log(arguments)
// }

// foo()

// 2.案例二:
// function foo() {
//   var bar = () => {
//     console.log(arguments)
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.案例三:
var foo = (num1, num2, ...args) => {
  console.log(args)
}

foo(1, 2, 3, 4, 5)
