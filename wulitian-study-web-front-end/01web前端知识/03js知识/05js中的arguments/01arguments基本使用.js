function foo(num1, num2, num3) {
  console.log(arguments.length)
  console.log(arguments[1])
  console.log(arguments[2])
  console.log(arguments[4])
  console.log(arguments.callee)
  // arguments.callee()
}

foo(1, 2, 3, 4, 5)
