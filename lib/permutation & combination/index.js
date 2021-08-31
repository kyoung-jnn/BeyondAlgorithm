function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((item) => [item]);

  arr.forEach((item, index, array) => {
    const fixed = item;
    const restArr = array.filter((item, arrIndex) => arrIndex !== index);
    const restCombination = combination(restArr, selectNum - 1);
    const fixedCombination = restCombination.map((item) => [fixed, ...item]);
    result.push(...fixedCombination);
  });

  return result;
}

function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((item) => [item]);

  arr.forEach((item, index, array) => {
    const fixed = item;
    const restArr = array.slice(index + 1);
    const restCombination = combination(restArr, selectNum - 1);
    const fixedCombination = restCombination.map((item) => [fixed, ...item]);
    result.push(...fixedCombination);
  });

  return result;
}
