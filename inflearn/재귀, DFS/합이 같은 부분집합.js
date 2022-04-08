function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((acc, cur) => cur + acc, 0);

  const DFS = (index, sum) => {
    if (answer === "YES") return;
    if (index === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        return;
      }
    } else {
      DFS(index + 1, sum + arr[index]); // 현재 수 포함
      DFS(index + 1, sum); // 현재 수 포함
    }
  };

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
