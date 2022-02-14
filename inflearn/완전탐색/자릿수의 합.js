function solution(arr) {
  let answer = 0;
  let max = Number.MAX_SAFE_INTEGER;
  for (num of arr) {
    const origin = num;
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum > answer) {
      max = sum;
      answer = origin;
    } else if (max === sum) {
      answer = origin > answer && origin;
    }
  }

  return answer;
}

console.log(solution([128, 137, 123]));
