function solution(s) {
  let length = s.length;
  let answer = [];

  if (s.length === 1) {
    return 1;
  }

  for (let i = 1; i <= length / 2; i++) {
    let temp_answer = "";
    let count = 0;

    for (let j = 0; j < length; j += i) {
      let current = s.substr(j, i);
      let next = s.substr(j + i, i);

      if (current === next) {
        count += 1;
      } else {
        if (count === 0) {
          temp_answer += current;
        } else {
          temp_answer += count + 1;
          temp_answer += current;
          count = 0;
        }
      }
    }

    answer.push(temp_answer.length);
  }

  return Math.min(...answer);
}

//solution("aabbaccc");
console.log(solution("a"));
