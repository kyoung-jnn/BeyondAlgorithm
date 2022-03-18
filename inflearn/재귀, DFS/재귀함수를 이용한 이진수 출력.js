function solution(N) {
  let answer = "";

  const DFS = (num) => {
    if (num <= 0) return;
    DFS(parseInt(num / 2));

    if (num % 2 === 0) {
      answer += "0";
    } else {
      answer += "1";
    }
  };

  DFS(N);

  return answer;
}

console.log(solution(11));
