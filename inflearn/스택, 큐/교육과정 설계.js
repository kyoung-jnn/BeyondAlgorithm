function solution(need, plan) {
  const needs = need.split("");

  for (const char of plan) {
    if (needs.includes(char)) {
      if (char !== needs.shift()) return "NO";
    }
  }

  // 필수과목이 없음
  if (needs.length > 0) return "NO";
  return "YES";
}

console.log(solution("CBA", "CDABGE"));
