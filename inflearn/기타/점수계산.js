function solution(n, arr) {
  return arr.reduce((acc, cur) => {
    if (cur) {
      answer += acc + cur;
      return acc + cur;
    } else {
      return 0;
    }
  }, 0);
}

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
