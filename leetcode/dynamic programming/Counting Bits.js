/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = Array(n + 1).fill(0);

  dp[0] = 0;
  for (let i = 1; i < n + 1; i++) {
    dp[i] = dp[Math.floor(i / 2)] + (i % 2);
  }

  return dp;
};
