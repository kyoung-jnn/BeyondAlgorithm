function solution(N) {
  const DFS = (num) => {
    if (num === 0) return;

    DFS(num - 1);
    console.log(num);
  };

  DFS(N);
}

console.log(solution(3));
