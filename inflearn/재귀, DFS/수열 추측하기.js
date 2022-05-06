function solution(n, r) {
  const DFS = (n, r) => {
    if (n === r || r === 0) return 1;

    if (dp[n][r]) return dp[n][r];
    dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    return dp[n][r];
  };

  return DFS(n, r);
}

console.log(solution(4, 16));
