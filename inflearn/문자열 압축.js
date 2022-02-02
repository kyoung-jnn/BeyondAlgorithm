function solution(string) {
  const answer = [];
  let count = 1;

  string = string + " ";
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      count += 1;
    } else {
      answer.push(string[i]);
      if (count !== 1) {
        answer.push(count);
        count = 1;
      }
    }
  }

  return answer.join("");
}

console.log(solution("KKHSSSSSSSE"));
