function solution(dartResult) {
  let answer = 0;
  let currentNum;
  const stack = [];
  for (let word of dartResult) {
    if (parseInt(word)) {
      if (currentNum) stack.push(currentNum);
      currentNum = parseInt(word);
    } else {
      switch (word) {
        case "S": {
          currentNum = Math.pow(currentNum, 1);
          break;
        }
        case "D": {
          currentNum = Math.pow(currentNum, 2);
          break;
        }
        case "T": {
          currentNum = Math.pow(currentNum, 3);
          break;
        }
        case "*": {
          if (stack.length) {
            let top = stack.pop();
            top *= 2;

            currentNum *= 2;
            stack.push(top, currentNum);
          } else {
            currentNum *= 2;
            stack.push(currentNum);
          }
          break;
        }
        case "#": {
          currentNum *= -1;
          break;
        }
      }
    }
  }

  answer = stack.reduce((acc, cur) => {
    return acc + cur;
  });
  return answer;
}

solution("1D#2S*3S");
