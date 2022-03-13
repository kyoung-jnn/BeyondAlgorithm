// O(n^2)

function solution(n, arr) {
  let answer = 0;

  for (let i = 1; i < n; i++) {
    const target = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > target) {
        arr[j + 1] = arr[j];
        arr[j] = target;
      } else {
        break;
      }
    }
  }

  return answer;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
