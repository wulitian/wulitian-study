class Node {
    constructor(context){
        this.context = context;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(context){
       const node = new Node(context);
        if(this.head == null){
            this.head = node;
        }else{
            let currect = this.head;
            while(currect.next){
                currect = currect.next;
            }
            node.prev = currect;
            currect.next = node;
        }
        this.tail = node
        this.length++
    }
    insert(position, context){
       let node = new Node(context)
       if (position === this.length) {
            this.append(element)
            return
        }else if(position === 0){
            let currect = this.head
            currect.prev = node
            node.next = currect
        }else {
            let prevNode = this.getNode(position-1);
            node.next = prevNode.next.next
            prevNode.next = node;
            node.prev = prevNode
        }
        this.length++
    }
    remove(context){
        let position = this.indexOf(context);
        this.removeAt(position);
    }
    removeAt(position){
        if (position >= this.length) {
			return null
		}
       let prevNode =  this.getNode(position-1);
       let lastNode = prevNode.next.next
       prevNode.next = lastNode;
       lastNode.prev = prevNode
    }
    getNode(position){
        if(position>this.length){
            return null;
        }
        let currect = this.head;
        for (let i = 0; i < position; i++) {
            currect = currect.next
        }
        return currect;
    }
    indexOf(context){
        let currect = this.head;
        for (let i = 0; i < this.length; i++) {
            if(currect.context === context){
                return i
            }
            currect = currect.next
        }
        return -1
       
    }
    toString(){
        let currect = this.head
		let arr = []
		while(currect) {
			arr.push(currect.context)
			currect = currect.next
		}
		return arr.join(',')
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }
    reverseToString(){
        let currect = this.tail
		let arr = []
		while(currect) {
			arr.push(currect.context)
			currect = currect.prev
		}
		return arr.join(',')
    }

}

let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append("1");
doubleLinkedList.append("2");
doubleLinkedList.append("3");
doubleLinkedList.append("4");
doubleLinkedList.append("5");
doubleLinkedList.removeAt("2");
doubleLinkedList.remove("4");
console.log(doubleLinkedList)
console.log(doubleLinkedList.toString())
console.log(doubleLinkedList.reverseToString())

