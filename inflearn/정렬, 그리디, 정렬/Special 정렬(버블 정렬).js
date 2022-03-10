// O(n^2)
// 버블 정렬

function solution(n, arr) {
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));
