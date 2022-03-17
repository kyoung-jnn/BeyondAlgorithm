function solution(N, M, arr) {
  const answer = [];

  arr.sort((a, b) => a - b);

  let left = arr[arr.length - 1];
  let right = arr.reduce((acc, cur) => acc + cur, 0);

  const checkRecord = (capacity) => {
    let count = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] <= capacity) sum += arr[i];
      else {
        count += 1;
        sum = arr[i];
      }
    }

    return count;
  };

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (checkRecord(mid) > M) {
      left = mid + 1;
    } else if (checkRecord(mid) <= M) {
      answer.push(mid);
      right = mid - 1;
    }
  }

  return answer.sort()[0];
}

console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
