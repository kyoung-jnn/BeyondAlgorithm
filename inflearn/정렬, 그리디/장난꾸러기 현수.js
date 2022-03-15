function solution(size, arr) {
  const answer = [];
  const temp = [...arr];
  temp.sort((a, b) => a - b);

  for (let i = 0; i < size; i++) {
    if (temp[i] !== arr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(6, arr));
