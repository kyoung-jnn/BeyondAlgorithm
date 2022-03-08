function solution(sticks) {
  let answer = 0;
  const stack = [];
  let rest = 0;

  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();

      if (sticks[i - 1] === "(") {
        answer += stack.length + rest;
        rest = 0;
      } else {
        // 막대기 끝
        rest += 1;
      }
    }
  }

  answer += 1;

  return answer;
}

console.log(solution("()(((()())(())()))(())"));

console.log(solution("(((()(()()))(())()))(()())"));
