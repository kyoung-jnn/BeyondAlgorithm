function solution(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));
