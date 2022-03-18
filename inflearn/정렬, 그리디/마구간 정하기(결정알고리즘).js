function solution(N, M, arr) {
  let answer = [];

  arr.sort((a, b) => a - b);

  const check = (mid) => {
    let count = 1;
    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - current >= mid) {
        count += 1;
        current = arr[i];
      }
    }

    return count;
  };

  let left = 1;
  let right = Math.max(...arr);

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (check(mid) >= M) {
      answer.push(mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return Math.max(...answer);
}

console.log(solution(5, 3, [1, 2, 8, 4, 9]));
