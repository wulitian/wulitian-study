/**
 * 杨辉三角下一行中间的数字等于上一行两个数字相加，两侧等于1
 *     1 
      1 1 
     1 2 1 
    1 3 3 1 
   1 4 6 4 1 
 1 5 10 10 5 1
 * @param {*} number 
 * @returns 
 */

 function fn(line){
    
    for( var i = 0 ; i < line ; i++ ){ 
        let arr=[];//用来放第i行的数
        for ( var j = 0 ; j <= i ; j++ ) {
            arr.push(pascalTriangle(i,j));
        }
        console.log(arr.join(' '));//字符串形式输出

    }
}
function pascalTriangle(m,n) {
    if(n===0){
        return 1
    }
    if(n===m){
        return 1
    }

    return pascalTriangle(m-1,n-1)+pascalTriangle(m-1,n);
    
}

export {
    fn
}