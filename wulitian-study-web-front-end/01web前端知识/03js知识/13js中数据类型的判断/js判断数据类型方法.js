let _typeof = function (data) {
    let value = /\[object (\w+)\]/.exec(
        Object.prototype.toString.call(data)
    );
    console.log(Object.prototype.toString.call(data))
    return value ? value[1].toLowerCase() : '';
}
console.log(_typeof('123'));      //"string"
console.log(_typeof(123));         //"number"
console.log(_typeof(123n));        //"bigint"
console.log(_typeof(null));       //"null"
console.log(_typeof(undefined));   //"undefined"
console.log(_typeof({}));          //"object"
console.log(_typeof([]));          //"array"
console.log(_typeof(/123/));       //"regexp"

