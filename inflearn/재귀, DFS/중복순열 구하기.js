function solution(N, M) {
  const answer = [];

  const temp = Array.from({ length: M }, () => 0);

  const DFS = (index) => {
    if (index == M) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= N; i++) {
        temp[index] = i;
        DFS(index + 1);
      }
    }
  };

  DFS(0);

  return answer;
}

console.log(solution(3, 2));
