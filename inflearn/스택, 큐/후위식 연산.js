function solution(postfix) {
  let answer = 1;
  const stack = [];
  for (const char of postfix) {
    // isNaN: 숫자로 인식 -> false
    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();

      if (char === "+") {
        stack.push(num2 + num1);
      } else if (char === "-") {
        stack.push(num2 - num1);
      } else if (char === "*") {
        stack.push(num2 * num1);
      } else if (char === "/") {
        stack.push(num2 / num1);
      }
    }
  }

  return stack[0];
}

console.log(solution("352+*9-"));
