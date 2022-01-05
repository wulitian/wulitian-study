// bst tree

function BinarySearchTree(){
    this.root = null;
    function Node(key){
        this.key = key; // 节点值
        this.left = null; // 左子树
        this.right = null; // 右子树
    }
    // 插入
    BinarySearchTree.prototype.insert = function(key){
        let newNode = new Node(key);
        if(this.root == null){
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode)
        }
    }
    // 插入节点
    BinarySearchTree.prototype.insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    // 先序遍历
    BinarySearchTree.prototype.inOrderTraveree = function(callback){
        debugger
        this.inOrderTravereeNode(this.root,callback)
        debugger
    }
    // 先序遍历递归函数
    BinarySearchTree.prototype.inOrderTravereeNode = function(node, callback){
        if(node){
            debugger
            callback(node.key)
            debugger
            this.inOrderTravereeNode(node.left, callback);
            debugger
            this.inOrderTravereeNode(node.right, callback);
            debugger
        }
    }
    // 中序遍历
    BinarySearchTree.prototype.preOrderTraveree = function(callback){
        this.inOrderTravereeNode(this.root,callback)
    }
    // 中序遍历递归函数
    BinarySearchTree.prototype.preOrderTravereeNode = function(node, callback){
        if(node){
            this.preOrderTravereeNode(node.left, callback);
            callback(node.key)
            this.preOrderTravereeNode(node.right, callback);
        }
    }
    // 后序遍历
    BinarySearchTree.prototype.postOrderTraveree = function(callback){
        this.inOrderTravereeNode(this.root,callback)
    }
    // 后序遍历递归函数
    BinarySearchTree.prototype.postOrderTravereeNode = function(node, callback){
        if(node){
            this.postOrderTravereeNode(node.left, callback);
            this.postOrderTravereeNode(node.right, callback);
            callback(node.key)
        }
    }
    // 最大值
    BinarySearchTree.prototype.maxVal = function(){
        let node = this.root;
        let key = null;
        while (node != null){
            key = node.key
            node = node.right
        }
        return key
    }
    // 最小值
    BinarySearchTree.prototype.minVal = function(){
        let node = this.root;
        let key = null;
        while (node != null){
            key = node.key
            node = node.left
        }
        return key
    }
}
let binarySearchTree = new BinarySearchTree;
binarySearchTree.insert(7);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
console.log(binarySearchTree.maxVal())
console.log(binarySearchTree.minVal())
binarySearchTree.inOrderTraveree(function(res){
    console.log(res)
})
