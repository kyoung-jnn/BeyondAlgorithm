// 설탕 배달
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let answer = 0;

function solution(N) {
  let number = Number(N);

  if (number % 5 === 0) {
    answer += number / 5;
    return answer;
  } else {
    number -= 3;
    answer += 1;

    if (number < 0) {
      answer = -1;
      return;
    } else if (number === 0) {
      return answer;
    } else {
      solution(number);
    }
  }
  return answer;
}

console.log(solution(input[0]));
