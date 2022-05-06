function solution(n, m) {
  const answer = [];

  const temp = Array.from({ length: m }, () => 0);
  const DFS = (depth, start) => {
    //
    if (depth === m) {
      answer.push(temp.slice());
    } else {
      for (let i = start; i <= n; i++) {
        temp[depth] = i;
        DFS(depth + 1, i + 1);
      }
    }
  };

  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
