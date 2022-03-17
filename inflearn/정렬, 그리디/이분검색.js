function solution(N, M, arr) {
  let answer = 0;

  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let center = parseInt((left + right) / 2);

    if (arr[center] === M) {
      answer = center;
      break;
    } else if (arr[center] < M) {
      left = center;
    } else {
      right = center;
    }
  }

  return answer + 1;
}

console.log(solution(8, 32, [23, 87, 65, 12, 57, 32, 99, 81]));
