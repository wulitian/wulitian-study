function BST(){
    //树的一些方法
    let insertNode = (node, newNode) => {
        if(node.key < newNode.key){
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right, newNode)
            }
        }else{
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left, newNode)
            }
        }
    };
    let inOrderTraverseNode = (node, cb) => {
        if(node !== null){
            inOrderTraverseNode(node.left, cb);
            cb(node.key);
            inOrderTraverseNode(node.right, cb);
        }
    };
    let preOrderTraverseNode = (node, cb) => {
        if(node !== null){
            cb(node.key);
            preOrderTraverseNode(node.left, cb);
            preOrderTraverseNode(node.right, cb);
        }
    };
    let postOrderTraverseNode = (node, cb) => {
        if(node !== null){
            postOrderTraverseNode(node.left, cb);
            postOrderTraverseNode(node.right, cb);
            cb(node.key);
        }
    };
    let minNode = (node) => {
        if(node){
            while(node.left){
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    let maxNode = (node) => {
        if(node){
            while(node.right){
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    let findMinNode = (node) => {
        if(node){
            while(node.left){
                node = node.left;
            }
            return node;
        }
    };
    let searchNode = (node, key) => {
        if(node === null){
            return false;
        }else if(node.key === key){
            return true;
        }else if(node.key < key){
            searchNode(node.right, key);
        }else if(node.key > key){
            searchNode(node.left, key);
        }
    };
    let removeNode = (node, key) => {
        if(node === null){
            return null;
        }else if(key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
            }else if(node.left === null){
                node = node.right;
            }else if(node.right === null){
                node = node.left;
            }else{
                let aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
            }
            return node;
        }
    };

    //操作树
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;
    this.insert = (key) => {
        let newNode = new Node(key);
        if(root === null){
            root = newNode;
        }else{
            insertNode(root, newNode);
        }
    };
    this.inOrderTraverse = (cb) => {
        inOrderTraverseNode(root, cb);
    };
    this.preOrderTraverse = (cb) => {
        preOrderTraverseNode(root, cb);
    };
    this.postOrderTraverse = (cb) => {
        postOrderTraverseNode(root, cb);
    };
    this.min = () => {
        return minNode(root);
    };
    this.max = () => {
        return maxNode(root);
    };
    this.search = (key) => {
        return searchNode(root, key);
    };
    this.remove = (key) => {
        root = removeNode(root, key);
    }
}