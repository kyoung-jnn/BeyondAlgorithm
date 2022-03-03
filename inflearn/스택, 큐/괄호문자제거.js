function solution(string) {
  const stack = [];

  for (const char of string) {
    stack.push(char);

    if (char === ")") {
      while (true) {
        if (stack.pop() === "(") break;
      }
    }
  }

  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
