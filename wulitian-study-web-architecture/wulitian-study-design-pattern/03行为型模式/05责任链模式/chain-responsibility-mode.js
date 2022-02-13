!(function () {

    const User1 = function (type, pass) {
        if (type === "a" && pass) {
            console.log('用户1审批通过');
        } else {
            console.log('用户1未审批')
            return 'next'
        }
    }
    const User2 = function (type, pass) {
        if (type === "b" && pass) {
            console.log('用户2审批通过');
        } else {
            console.log('用户2未审批')
            return 'next'
        }
    }
    const User3 = function (type, pass) {
        if (type === "c" && pass) {
            console.log('用户3审批通过');
        } else {
            console.log('用户3未审批');
            console.log('没有用户审批通过请假失败');
        }
    }

    const Handle = function (fn) {
        this.fn = fn;
        this.receiver = null;
    }
    Handle.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    }
    Handle.prototype.passRequest = function () {
        let returnMsg = this.fn.apply(this, arguments);
        if (returnMsg === 'next') {
            return this.receiver && this.receiver.passRequest.apply(this.receiver, arguments);
        }
        return returnMsg;
    }
    function Client(){
        let user1 = new Handle(User1);
        let user2 = new Handle(User2);
        let user3 = new Handle(User3);
        user1.setReceiver(user2);
        user2.setReceiver(user3);
        return user1;
    }

    let client = new Client();
    client.passRequest('a', true);
    client.passRequest('b', false);
    client.passRequest('c', true);
    client.passRequest('d', false);

})()

!(function () {
    class Handle {
        constructor() {
            this.name = "";
            this.nextUser = null;
        }

        setUser(nextUser) {
            this.nextUser = nextUser;
        }

        approval(name, message) {
            if (this.name !== "") {
                console.log(name)
                this.name = name;
            }
            if (this.nextUser != null) {
                this.nextUser.approval(name, message);
            }
        }
    }

    class ConcreteHandlerUser1 extends Handle {
        constructor(name) {
            super();
            this.name = name;
        }

        approval(message) {
            console.log(message);
        }
    }

    class ConcreteHandlerUser2 extends Handle {
        constructor(name) {
            super();
            this.name = name;
        }

        approval(message) {
            console.log(message);
        }
    }

    class Client {
        constructor() {

        }

        getChain() {
            const ConcreteHandlerUser1 = new ConcreteHandlerUser1("a");
            const ConcreteHandlerUser2 = new ConcreteHandlerUser2("b");
            ConcreteHandlerUser1.setUser(ConcreteHandlerUser2)
            return ConcreteHandlerUser1;
        }
    }

    let client = new Client();
    client.getChain().approval("a");
    client.getChain().approval("b");
    client.getChain().approval("c");
})()


