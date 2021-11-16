function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => {
    return a - b; // 오름차순
  });

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      answer += 1;
    } else {
      break;
    }
  }

  return answer;
}
