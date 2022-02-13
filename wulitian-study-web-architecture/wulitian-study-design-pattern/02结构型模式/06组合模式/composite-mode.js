!(function () {
    const Folder = function (name) {
        this.name = name;
        this.files = [];
    }
    Folder.prototype.add = function (file) {
        this.files.push(file)
    }
    Folder.prototype.scan = function () {
        console.log('开始扫描文件夹: ' + this.name);
        this.files.forEach((item, i) => {
            item.scan()
        })
    }

    const File = function (name) {
        this.name = name;
        this.files = [];
    }
    File.prototype.add = function (file) {
        throw new Error('不可以在文件下面添加文件');
    }
    File.prototype.scan = function () {
        console.log('开始扫描文件: ' + this.name);
    }
    let folder1 = new Folder("文件夹1");
    let folder2 = new Folder("文件夹2");
    let file1 = new File("文件1");
    let file2 = new File("文件2");
    folder1.add(file1);
    folder2.add(file2);
    folder1.scan()
    folder2.scan()
})()

!(function () {
    class Folder {
        constructor(name) {
            this.name = name;
            this.files = [];
        }
        add(file) {
            this.files.push(file)
        }
        scan() {
            console.log('开始扫描文件夹: ' + this.name);
            this.files.forEach((item, i) => {
                item.scan()
            })
        }
    }

    class File {
        constructor(name) {
            this.name = name;
        }
        add(file) {
            throw new Error('不可以在文件下面添加文件');
        }
        scan() {
            console.log('开始扫描文件: ' + this.name);
        }
    }

    let folder1 = new Folder("文件夹1");
    let folder2 = new Folder("文件夹2");
    let file1 = new File("文件1");
    let file2 = new File("文件2");
    folder1.add(file1);
    folder2.add(file2);
    folder1.scan()
    folder2.scan()
})()
