/**
 * 适配器模式
 */

class Adapter {
    specificRequest() {
        return "旧的接口内容"
    }
}

class Target {
    constructor() {
        this.adapter = new Adapter();
    }

    request() {
        let info = this.adapter.specificRequest();
        return `${info} - 处理... - 新的接口内容`;
    }
}

// 测试
let target = new Target();
const r = target.request();
console.log(r);
