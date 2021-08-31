function solution(new_id) {
  let answer = new_id;

  // 1단계
  answer = answer.toLowerCase();

  // 2단계
  answer = answer.replace(/[^a-z0-9-_.]/g, "");

  // 3단계
  answer = answer.replace(/[\.]{2,}/g, ".");

  // 4단계
  answer = answer.replace(/^\.|\.$/, "");

  // 5단계
  if (answer.length === 0) {
    answer += "a";
  }

  // 6단계
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }
  answer = answer.replace(/\.$/, "");

  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }

  return answer;
}

solution("=.=");
