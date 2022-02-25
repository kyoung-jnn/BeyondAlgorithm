// Slide window
// 특정 구간(길이)만큼 쭉 비교해나가는

function solution(K, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let right = K; right < arr.length; right++) {
    const temp = answer + arr[right] - arr[right - K];

    answer = Math.max(temp, answer);
  }

  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(4, arr));
