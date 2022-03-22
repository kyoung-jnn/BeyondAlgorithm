function solution(N) {
  const answer = [];
  const checkList = Array.from({ length: N + 1 }, () => false);

  const DFS = (num) => {
    if (num > N) {
      let temp_answer = "";
      for (let i = 1; i <= N; i++) {
        if (checkList[i]) {
          temp_answer += i + " ";
        }
      }
      if (temp_answer) answer.push(temp_answer.trim());
    } else {
      checkList[num] = true;
      DFS(num + 1);
      checkList[num] = false;
      DFS(num + 1);
    }
  };

  DFS(1);

  return answer;
}

console.log(solution(3));
