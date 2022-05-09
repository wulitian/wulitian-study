function fn(number){
    const partitionMatrix = Array(number+1).fill(null).map(()=>Array(number+1).fill(null))
    for (let summandIndex = 0; summandIndex <= number; summandIndex += 1) {
      partitionMatrix[summandIndex][0] = 1;
    }
    for (let summandIndex = 1; summandIndex <= number; summandIndex += 1) {
      for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
        if (summandIndex > numberIndex) {
          partitionMatrix[summandIndex][numberIndex] = partitionMatrix[summandIndex - 1][numberIndex];
        } else {
          const combosWithoutSummand = partitionMatrix[summandIndex - 1][numberIndex];
          const combosWithSummand = partitionMatrix[summandIndex][numberIndex - summandIndex];
  
          partitionMatrix[summandIndex][numberIndex] = combosWithoutSummand + combosWithSummand;
        }
      }
    }
    console.log(partitionMatrix)
  
}

console.log(fn(6))
