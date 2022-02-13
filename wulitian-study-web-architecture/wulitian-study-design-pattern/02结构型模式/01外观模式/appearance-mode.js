!(function(){
    const appearance = {
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
})()

!(function(){
    function addEvent(element, type, fn) {
        if (element.addEventListener) {      // 支持 DOM2 级事件处理方法的浏览器
            element.addEventListener(type, fn, false)
        } else if (element.attachEvent) {    // 不支持 DOM2 级但支持 attachEvent
            element.attachEvent('on' + type, fn)
        } else {
            element['on' + type] = fn        // 都不支持的浏览器
        }
    }
    let myInput = document.getElementById('myinput')
    addEvent(myInput, 'click', function() {
        console.log('绑定 click 事件')
    })
})()
