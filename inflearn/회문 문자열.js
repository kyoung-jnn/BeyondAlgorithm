function solution(string) {
  let answer = "YES";

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i].toLowerCase() !== string[string.length - i - 1].toLowerCase())
      answer = "NO";
  }

  return answer;
}
