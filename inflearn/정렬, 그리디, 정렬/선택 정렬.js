// O(n^2)

function solution(n, arr) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return answer;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
