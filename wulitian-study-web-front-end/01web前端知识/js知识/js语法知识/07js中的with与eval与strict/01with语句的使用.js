// "use strict";

var message = "message"

var obj = {message: "obj message"}

function foo() {
    function bar() {
        with (obj) {
            console.log(message)
        }
    }

    bar()
}

foo()

var info = {name: "wulitian"}

with (info) {
    console.log(name)
}

