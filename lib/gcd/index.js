// 최대공약수 구하기
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
