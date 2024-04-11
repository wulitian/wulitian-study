!(function () {
    // 统一遍历接口实现
    let each = function(arr, callBack) {
        for (let i = 0, len = arr.length; i < len; i++) {
            // 将值，索引返回给回调函数callBack处理
            if (callBack(i, arr[i]) === false) {
                break;  // 中止迭代器，跳出循环
            }
        }
    }
    // 外部调用
    each([1, 2, 3, 4, 5], function(index, value) {
        if (value > 3) {
            return false; // 返回false中止each
        }
        console.log([index, value]);
    })

// 输出：[0, 1]  [1, 2]  [2, 3]
})()
