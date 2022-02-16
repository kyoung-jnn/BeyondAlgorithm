function solution(n, m, arr) {
  let answer = 0;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 오른차순

  for (let i = 0; i < n; i++) {
    let total = m - arr[i][0] / 2 + arr[i][1];
    let count = 1;
    let sum = 0;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      sum += arr[j][0] + arr[j][1];
      count += 1;

      if (total < sum) {
        count -= 1;
        break;
      }
    }

    answer = Math.max(count, answer);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(5, 28, arr));
