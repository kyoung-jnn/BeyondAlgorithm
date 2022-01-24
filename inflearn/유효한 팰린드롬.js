function solution(string) {
  const forward = string.toLowerCase().replace(/[^a-z]/g, "");
  const reverse = forward.split("").reverse().join("");

  return forward === reverse ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
