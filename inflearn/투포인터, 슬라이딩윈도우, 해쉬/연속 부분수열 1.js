function solution(M, arr) {
  let answer = 0;

  for (let left = 0; left < arr.length; left++) {
    let right = left;
    let temp = 0;

    while (temp < M) {
      temp += arr[right];
      if (temp === M) answer += 1;

      right += 1;
    }
  }

  return answer;
}

const arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(3, arr));
