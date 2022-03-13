function solution(n, arr) {
  let max = 0;

  return arr.filter((num) => {
    if (num > max) {
      max = num;
      return true;
    } else {
      return false;
    }
  }).length;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
