function solution(N, M, arr) {
  let answer = 0;

  const DFS = (index, score, time) => {
    if (time > M) {
      return;
    }

    if (index === N) {
      if (time <= M) {
        answer = Math.max(score, answer);
      }
    } else {
      DFS(index + 1, score + arr[index][0], time + arr[index][1]); // 문제 풀 경우
      DFS(index + 1, score, time); // 문제 안 풀 경우
    }
  };

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
