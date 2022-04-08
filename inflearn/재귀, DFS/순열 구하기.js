function solution(N, M, arr) {
  const answer = [];

  const check = Array.from({ length: N }, () => false);
  const temp = Array.from({ length: M }, () => 0);

  const DFS = (index) => {
    if (M === index) {
      answer.push([...temp]);
    } else
      for (let i = 0; i < N; i++) {
        if (!check[i]) {
          check[i] = true;
          temp[index] = arr[i];
          DFS(index + 1);
          check[i] = false;
        }
      }
  };

  DFS(0);

  return answer;
}

console.log(solution(3, 2, [3, 6, 9]));
