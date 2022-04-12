// 命名空间（为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内）
var A;
(function (A) {
    A.a = 'a';
})(A || (A = {}));
var B;
(function (B) {
    B.a = 'b';
})(B || (B = {}));
console.log(A.a);
