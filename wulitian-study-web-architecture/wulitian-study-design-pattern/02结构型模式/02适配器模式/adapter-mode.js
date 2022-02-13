// 写法一
!(function () {
    /* 因为es6语法在浏览器中不支持此处需要babel，不在展示，直接看代码，也可以去继承成关键字   */

    // 适配器
    class adapter /*extends targer*/ {
        // constructor() {
        //     super();
        // }
        display() {
            // this.show();
            new adaptee().show();
        }
    }

    // 源对象
    class adaptee {
        show() {
            console.log("Adaptee")
        }
    }

    // 目标对象
    class targer {
        display() {
            console.log("Targer")
        }
    }

    new adapter().display();
})()

// 写法二
!(function () {
    const googleMap = {
        display: function () {
            console.log("googleMap")
        }
    }

    const baiduMap = {
        show: function () {
            console.log("baiduMap")
        }
    }

    const baiduMapAdapter = {
        display: function () {
            baiduMap.show()
        }
    }

    function renderMap(map){
        return map.display();
    }
    renderMap(googleMap);
    renderMap(baiduMapAdapter);
})()

// 参数适配
!(function () {
    function fun(obj) {
        let _adapter = {
            name: '雾里天',
            sex: '男',
            age: '18'
        }
        for (let i in _adapter) {
            _adapter[i] = obj[i] || _adapter[i]
        }
        console.log(_adapter);
        //    do something
    }
    fun({name: 'wulitan'});
// 数组转对象适配
    let arr = ['wulitian', '男', '18'];
    function arrToObj(arr) {
        return {
            name: arr[0],
            sex: arr[1],
            age: arr[2]
        }
    }
    console.log(arrToObj(arr));
})()
