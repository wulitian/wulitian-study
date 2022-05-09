import {euclideanAlgorithmRecursion} from '../最大公约数(欧几里得算法，辗转相除)/euclideanAlgorithm.js'


function leastCommonMultiple(a, b) {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithmRecursion(a, b);
}

export {
    leastCommonMultiple
}