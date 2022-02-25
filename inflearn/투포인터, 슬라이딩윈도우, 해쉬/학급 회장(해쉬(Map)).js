function solution(N, arr) {
  const hashMap = new Map();

  /* 
   has, set, get 기본 메소드들 알아 놓기
  */

  for (let x of arr) {
    if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1);
    else hashMap.set(x, 1);
  }

  return [...hashMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
}

console.log(solution(15, "BACBACCACCBDEDE"));
