function solution(str1, str2) {
  let answer = "YES";
  const str1Hash = new Map();

  for (let char of str1) {
    if (str1Hash.has(char)) str1Hash.set(char, str1Hash.get(char) + 1);
    else str1Hash.set(char, 1);
  }

  for (let char of str2) {
    if (!str1Hash.has(char) || str1Hash.get(char) - 1 < 0) {
      return "NO";
    } else str1Hash.set(char, str1Hash.get(char) - 1);
  }

  return answer;
}
const str1 = "AbaAeCe";
const str2 = "baeAACA";

console.log(solution(str1, str2));
