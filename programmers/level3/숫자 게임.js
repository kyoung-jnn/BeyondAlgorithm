function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let index = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] > A[index]) {
      answer += 1;
      index += 1;
    }
  }

  return answer;
}
