function solution(n, costs) {
  let answer = 0;
  let bridge = 0;

  const isVisited = Array(n).fill(false);

  costs.sort((a, b) => {
    return a[2] - b[2];
  });

  isVisited[costs[0][0]] = true;
  isVisited[costs[0][1]] = true;
  answer += costs[0][2];
  bridge += 1;

  while (bridge < n - 1) {
    for (const [start, end, cost] of costs) {
      if (
        (!isVisited[start] && isVisited[end]) ||
        (isVisited[start] && !isVisited[end])
      ) {
        isVisited[start] = true;
        isVisited[end] = true;
        answer += cost;
        bridge += 1;
        break;
      }
    }
  }

  return answer;
}

// 크루스칼 + union find
const unionFind = (arr, num) => {
  if (arr[num] === num) {
    return num;
  } else {
    arr[num] = unionFind(arr, arr[num]);
    return arr[num];
  }
};

function solution(n, costs) {
  let answer = 0;
  const root = Array(n)
    .fill(false)
    .map((_, index) => index);

  costs.sort((a, b) => {
    return a[2] - b[2];
  });

  for (const [start, end, cost] of costs) {
    const rootStart = unionFind(root, start);
    const rootEnd = unionFind(root, end);
    if (rootStart !== rootEnd) {
      answer += cost;
      root[rootEnd] = rootStart;
    }
  }

  return answer;
}
