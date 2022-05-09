  /** 
 * @param {圆盘数：number} plates 
 * @param {起始柱子 a：string} source 
 * @param {辅助柱子 b：string} helper 
 * @param {目标柱子 c：string} dest 
 * @param {移动步骤集：Array，数组的长度就是移动的次数} moves 
 */
function hanoi(plates, source, helper, dest, moves = []) {
  if (plates <= 0) {
      return moves;
  }
  if (plates === 1) {
      moves.push([source, dest]);
  } else {
      hanoi(plates - 1, source, dest, helper, moves);
      moves.push([source, dest]);
      hanoi(plates - 1, helper, source, dest, moves);
  }
  return moves;
}

console.log(hanoi(4, 'source', 'helper', 'dest'));