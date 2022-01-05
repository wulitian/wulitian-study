/**
 * 外观模式式模式示例（这个例子主要改变的外观实际上就是将一个复杂的调用过程简化了，仔细看外观确实改变了，但是理论上代码的复杂度更高了，但是维护方便）
 */
//
var appearance = {
    g: function(id){
        return document.getElementById(id);
    },
    css: function (id, key, value) {
        document.getElementById(id).style[key] = value;
    },
    attr: function (id, attr, value){
        document.getElementById(id)[attr] = value;
    },
    html: function (id, html) {
        document.getElementById(id).innerHTML(html);
    },
    on: function (id, type, fn) {
        document.getElementById(id)['on'+type] = fn;
    }
}
appearance.css('btn','background','red')
appearance.on('btn','click', function(e){
    alert("wulitian")
})
