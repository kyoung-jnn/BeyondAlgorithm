function solution(n, k, arr, m) {
  let answer = 0;

  const DFS = (depth, start, sum) => {
    if (depth === k) {
      if (sum % m === 0) answer += 1;
    } else {
      for (let i = start; i < n; i++) {
        DFS(depth + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);

  return answer;
}

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
