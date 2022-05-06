function solution(N) {
  const DFS = (N, value) => {
    if (N === 0) return value;
    return DFS(N - 1, value * N);
  };

  return DFS(N, 1);
}

console.log(solution(5));
