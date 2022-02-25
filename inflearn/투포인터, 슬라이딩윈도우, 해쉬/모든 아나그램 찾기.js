function solution(str1, str2) {
  let answer = 0;
  let stringArr = [];
  // 투 포인터
  for (let left = 0; left < str1.length - str2.length + 1; left++) {
    let right = left;
    let temp = "";
    while (right < left + str2.length) {
      temp += str1[right];
      right += 1;
    }

    stringArr.push(temp);
  }

  // HashMap
  const originMap = new Map();
  for (let char of str2) {
    if (originMap.has(char)) originMap.set(char, originMap.get(char) + 1);
    else originMap.set(char, 1);
  }

  for (let i = 0; i < stringArr.length; i++) {
    let isAnswer = true;
    const copyOriginMap = new Map([...originMap]);
    const currentString = stringArr[i];

    for (let char of currentString) {
      if (!copyOriginMap.has(char) || copyOriginMap.get(char) - 1 < 0) {
        isAnswer = false;
        break;
      } else copyOriginMap.set(char, copyOriginMap.get(char) - 1);
    }

    isAnswer && answer++;
  }

  return answer;
}
const str1 = "bacaAacba";
const str2 = "abc";

console.log(solution(str1, str2));
