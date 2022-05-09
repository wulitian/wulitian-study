/**
 * 汉明距离是指两个字符串长度相等当前索引位置上不相同的个数
 * @param {*} number 
 */
function hanmingDistance(str,str2) {
    let distance = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]!=str2[i]){
            distance+=1
        }
    }
    return distance;
}

export {
    hanmingDistance
}