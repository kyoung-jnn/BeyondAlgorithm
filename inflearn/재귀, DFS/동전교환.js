function solution(N, arr, M) {
  let answer = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => b - a);

  const DFS = (depth, count) => {
    if (count < 0) return;
    if (depth >= answer) return; // 가지치기!

    if (count === 0) {
      answer = Math.min(depth, answer);
    } else
      for (let i = 0; i < N; i++) {
        DFS(depth + 1, count - arr[i]);
      }
  };

  DFS(0, M);

  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
