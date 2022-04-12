/**
 * 显示绑定高于隐式绑定
 */
function foo() {
  console.log(this)
}

var obj = {
  name: "obj",
  foo: foo.bind("aaa")
}

obj.foo()
