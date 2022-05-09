/***
 * 莱文斯坦距离，指两个字串之间，由一个转成另一个所需的最少编辑操作次数。
    允许的编辑操作包括：
    将一个字符替换成另一个字符
    插入一个字符
    删除一个字符
 */
function LWSDDistance(a,b) {
    const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++ ) {
        distanceMatrix[0][i] = i;
    }
    for (let j = 0; j <= b.length; j++) {
        distanceMatrix[j][0] = j;
    }
    for (let j = 1; j <= b.length; j += 1) {
        for (let i = 1; i <= a.length; i += 1) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            distanceMatrix[j][i] = Math.min(
                distanceMatrix[j][i - 1] + 1, // deletion
                distanceMatrix[j - 1][i] + 1, // insertion
                distanceMatrix[j - 1][i - 1] + indicator, // substitution
                );
        }
    }
    console.log(distanceMatrix[b.length][a.length])
}



LWSDDistance('hello','heloo')