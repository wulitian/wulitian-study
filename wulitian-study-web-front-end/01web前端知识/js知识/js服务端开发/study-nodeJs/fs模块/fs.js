// 文件系统模块
const fs = require('wulitian-study-web-front-end/web前端知识/js知识/js服务端开发/study-nodeJs/fs模块/fs');
// 文件读取
fs.readFile('test.txt','utf8',function(error,res){
    if(error){
        console.log('文件读取失败');
    }else{
        console.log(res);
        console.log('文件读取成功');
    }
})
console.log(fs.readFileSync('test.txt'))
fs.writeFile('test.txt','abc',function(error){
    if(error){
        return console.log("文件写入失败")
    }
    console.log('文件写入成功')
})
fs.copyFile('test.txt', 'destination.txt', function(error){
    console.log(error);
});
