function LinkedList2() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0,
        head = null,
        tail = null;

    this.append = (element) => {
        let node = new Node(element),
            current;
        if (head === null) {
            head = node;
            tail = node;
        } else {
            current = tail;
            current.next = node;
            node.prev = current;
            tail = node;
        }
        length++;
    };
    this.indexOf = (element) => {
        let current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.insert = (position, element) => {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                current.prev = node;
                node.prev = previous;
                previous.next = node;
            }
            length++;
        } else {
            return false;
        }
    };
    this.removeAt = (position) => {
        if (position >= 0 && position < length) {
            let current = head,
                previous,
                index;
            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = (element) => {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.toString = () => {
        let current = head,
            string = '';
        while (current.next) {
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1);
    };
    this.isEmpty = () => {
        return length === 0;
    };
    this.size = () => {
        return length;
    };
    this.getHead = () => {
        return head;
    };
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            this.getNode(this.length-1).next = node;

        }
        this.length++;
    }

    insert(position, element) {
        if(position>this.length||position<0){
            return new Error("超出范围");
        }
       const node = new Node(element);
       if(position===0){
           node.next = this.head;
           this.head = node;
       }
        let preNode = this.getNode(position-1);
        node.next = preNode.next
        preNode.next = node;
        this.length++;
    }

    remove(position) {
        if(position>this.length||position<0){
            return new Error("超出范围");
        }
        let current = this.head;
        if(position===0){
            this.head = current.next;
        }else{
            let preNode = this.getNode(position-1);
            current = preNode.next;
            preNode.next = current.next;
        }
        this.length--;
    }

    indexOf(element){
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if(current.element === element){
                return i
            }
            current = current.next;
        }
    }

    getNode(position) {
        let current = this.head;
        for (let j = 0; j < position; j++) {
            current = current.next;
        }
        return current
    }

    toString() {
        let arr = [];
        let correct = this.head;
        while(correct){
            arr.push(correct.element)
            correct = correct.next;
        }
        return arr.join('=>')
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head
    }
}

let linkedList = new LinkedList();
linkedList.append("1")
linkedList.append("2")
linkedList.append("3")
linkedList.append("4")
linkedList.append("5")
linkedList.insert(2,"--")
linkedList.remove(2)
console.log(linkedList.indexOf("1"))
console.log(linkedList.indexOf("2"))
console.log(linkedList.indexOf("3"))
console.log(linkedList.indexOf("4"))
console.log(linkedList.indexOf("5"))
console.log(linkedList.toString())
