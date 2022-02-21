function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b); // 오름차순, 2자리 숫자를 위해

  let point1 = 0;
  let point2 = 0;

  while (point1 < arr1.length && point2 < arr2.length) {
    if (arr1[point1] === arr2[point2]) {
      answer.push(arr1[point1]);
      point1++;
      point2++;
    } else if (arr1[point1] > arr2[point2]) {
      point2++;
    } else {
      point1++;
    }
  }

  return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
