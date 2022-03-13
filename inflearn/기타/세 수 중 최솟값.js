// 정렬 사용 금지

function solution(a, b, c) {
  let answer = 0;
  if (a < b) answer = a;
  else answer = b;

  if (answer < c) return answer;
  else return c;
}
