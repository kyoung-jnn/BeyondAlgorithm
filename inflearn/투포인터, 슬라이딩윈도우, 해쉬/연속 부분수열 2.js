function solution(M, arr) {
  let answer = 0;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > M) {
      sum -= arr[left];
      left += 1;
    }
    answer += right - left + 1;
  }

  return answer;
}

const arr = [1, 3, 1, 2, 3];

console.log(solution(5, arr));
