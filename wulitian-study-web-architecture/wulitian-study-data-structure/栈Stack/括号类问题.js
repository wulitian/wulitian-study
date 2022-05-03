/**
 * licode30
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。
 */

function fn(str) {
    const stack = [];
    if (str?.length % 2 !== 0) {
        return false
    }
    for (let i = 0; i < str?.length; i++) {
        switch (str[i]) {
            case "(" :
                stack.push(str[i]);
                break;
            case "{" :
                stack.push(str[i]);
                break;
            case "[" :
                stack.push(str[i]);
                break;
            case ")" :
                if(stack[stack.length-1] === '('){
                    stack.pop();
                }else{
                    return false
                }
                break;
            case "}" :
                if(stack[stack.length-1] === '{'){
                    stack.pop();
                }else{
                    return false
                }
                break;
            case "]" :
                if(stack[stack.length-1] === '['){
                    stack.pop();
                }else{
                    return false
                }
                break;
            default:
                console.log("字符串有问题")
                return false
        }
        console.log(stack)
    }
    return stack.length===0
}
console.log(fn())
