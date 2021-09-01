function solution(w, h) {
  let origin = w * h;
  const cutting = w + h - gcd(w, h);

  return origin - cutting;
}

// 최대공약수 구하기
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
