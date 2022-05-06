function solution(n, r) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  const DFS = (n, r) => {
    if (n === r || r === 0) return 1;

    if (dp[n][r]) return dp[n][r];
    dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    return dp[n][r];
  };

  return DFS(n, r);
}

console.log(solution(33, 19));
