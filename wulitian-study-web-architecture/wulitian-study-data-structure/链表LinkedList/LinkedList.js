function LinkedList(){
    let Node = function(element){
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
      if(head === null){
          head = node;
          tail = node;
      }else{
          //单向链表的话，这样添加
          // current = head;
          // while(current.next){
          //     current = current.next;
          // }
          // current.next = node;

          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
      }
      length ++;
    };
    this.indexOf = (element) => {
        let current = head,
            index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.insert = (position, element) => {
        if(position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if(position === 0){
                if(!head){
                    head = node;
                    tail = node;
                }else{
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }else if(position === length){
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                current.prev = node;
                node.prev = previous;
                previous.next = node;
            }
            length ++;
        }else{
            return false;
        }
    };
    this.removeAt = (position) => {
        if(position >= 0 && position < length){
            let current = head,
                previous,
                index;
            if(position === 0){
                head = current.next;
                if(length === 1){
                    tail = null;
                }else{
                    head.prev = null;
                }
            }else if(position === length - 1){
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length --;
            return current.element;
        }else{
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
        while(current.next){
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