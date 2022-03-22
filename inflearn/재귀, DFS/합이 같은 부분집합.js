function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((acc, cur) => acc + cur, 0);

  const DFS = (depth, sum) => {
    if (answer === "YES") return;
    if (depth === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        return;
      }
    } else {
      DFS(depth + 1, sum + arr[depth]); // 포함
      DFS(depth + 1, sum); // 불포함
    }
  };

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
