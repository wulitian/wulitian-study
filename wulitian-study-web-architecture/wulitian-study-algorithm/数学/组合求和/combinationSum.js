 function combinationSumRecursive(
    candidates,
    remainingSum,
    finalCombinations = [],
    currentCombination = [],
    startFrom = 0,
  ) {
    if (remainingSum < 0) {
      return finalCombinations;
    }
  
    if (remainingSum === 0) {
      finalCombinations.push(currentCombination.slice());
      return finalCombinations;
    }
  
    for (let i = startFrom; i < candidates.length; i++) {
      const currentCandidate = candidates[i];
   
      currentCombination.push(currentCandidate);
      console.log(currentCombination)
      combinationSumRecursive(
        candidates,
        remainingSum - currentCandidate,
        finalCombinations,
        currentCombination,
        i,
      );
      currentCombination.pop();
      
    }
  
    return {
      finalCombinations,
      currentCombination
    };
  }
var combinationSum = function(candidates, target) {
  let result = [], combination = [];
  function dfs(nums, target, index, combination, result) {
      if(target === 0) {
          result.push([...combination]);
      } else if(target > 0 && index < nums.length) {
          dfs(nums, target, index + 1, combination, result);
          combination.push(nums[index]);
          dfs(nums, target - nums[index], index, combination, result);
          combination.pop();
      }
  }
  dfs(candidates, target, 0, combination, result);
  return result;
};



function fn(nums, target, index=0, arr = [], resArr = []) {
  if(target === 0) {
    resArr.push([...arr])
    return
  } else if(target > 0 && index < nums.length) {
      fn(nums, target, index + 1, arr, resArr);
      arr.push(nums[index])
      fn(nums, target - nums[index], index, arr, resArr);
      arr.pop()
    }
    return resArr
  }
  // console.log(combinationSumRecursive([2,3,4],6))
  console.log(fn([2,3,4],6))