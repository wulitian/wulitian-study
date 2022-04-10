/**
 * new的优先级高于隐式绑定
 */
var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

var f = new obj.foo()

