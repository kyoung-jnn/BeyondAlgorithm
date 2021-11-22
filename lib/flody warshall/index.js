function solution(n, results) {
  let answer = 0;

  // 2차원이 필수!!!!

  let adjMatrix = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  results.forEach(([win, lose]) => {
    adjMatrix[win][lose] = 1; // 이김
    adjMatrix[lose][win] = -1; // 짐
  });

  // 중간 값을 거쳐가야한다.
  for (let mid = 1; mid < n + 1; mid++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (i === j) continue;
        if (adjMatrix[i][j] === Infinity) {
          if (adjMatrix[i][mid] === 1 && adjMatrix[mid][j] === 1) {
            adjMatrix[i][j] = 1;
          } else if (adjMatrix[i][mid] === -1 && adjMatrix[mid][j] === -1) {
            adjMatrix[i][j] = -1;
          }
        }
      }
    }
  }

  adjMatrix.forEach((row) => {
    const result = row.filter((item) => {
      return item === Infinity;
    }).length;

    if (result === 2) answer++;
  });

  return answer;
}
