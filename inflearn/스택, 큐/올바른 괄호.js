function solution(string) {
  const stack = [];

  for (const char of string) {
    if (!stack.length) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (top === "(" && char === ")") {
        continue;
      } else {
        stack.push(top);
        stack.push(char);
      }
    }
  }

  return stack.length ? "NO" : "YES";
}

console.log(solution("(())()"));
