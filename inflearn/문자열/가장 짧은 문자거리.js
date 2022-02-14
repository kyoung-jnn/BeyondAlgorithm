function solution(string, target) {
  const answer = [];
  const location = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) location.push(i);
  }

  for (let i = 0; i < string.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < location.length; j++) {
      const temp = Math.abs(i - location[j]);
      if (min > temp) min = temp;
    }

    answer.push(min);
  }

  return answer;
}

console.log(solution("teachermode", "e"));
