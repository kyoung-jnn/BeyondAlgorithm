function solution(cacheSize, arr) {
  var answer = Array.from({ length: cacheSize }, () => 0);

  for (const num of arr) {
    const targetIndex = answer.indexOf(num);

    if (targetIndex === -1) {
      answer.unshift(num);
    } else {
      answer.splice(targetIndex, 1); // 삭제
      answer.unshift(num);
    }
  }

  return answer.slice(0, 5);
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
