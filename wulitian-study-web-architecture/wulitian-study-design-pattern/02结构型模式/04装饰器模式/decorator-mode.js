!(function () {
    // 假设有一个简单的函数，功能是输出一条消息。现在想要增加一个功能，在输出消息之前，输出当前的日期和时间。
    function simpleMsg() {
        console.log('这是一条消息');
    }
    function dataTimeDecorator(fn) {
        return function () {
            console.log('当前时间为', new Date());
            fn()
        }
    }
    const decorator = dataTimeDecorator(simpleMsg)
    decorator();
})()

