function solution(arr) {
  let answer = 0;
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // 뒤에 먼저 삭제
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
