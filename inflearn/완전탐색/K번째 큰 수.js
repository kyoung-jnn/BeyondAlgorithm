function solution(n, m, arr) {
  let answer = 0;

  const temp = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  return Array.from(new Set(temp)).sort((a, b) => b - a)[m - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
