// 바둑이를 태운다, 태우지 않는다 2가지 경우의 수로 본다

function solution(N, arr) {
  arr.sort((a, b) => b - a);
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (index, sum) => {
    if (sum > N) return;

    if (index === arr.length) {
      answer = Math.max(sum, answer);
    } else {
      DFS(index + 1, sum + arr[index]); // 태움
      DFS(index + 1, sum); // 안태움
    }
  };

  DFS(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
