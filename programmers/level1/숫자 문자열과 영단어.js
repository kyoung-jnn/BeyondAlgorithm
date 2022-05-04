// 문자열

function solution(s) {
  const numberList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numberList.forEach((number, index) => {
    let regex = new RegExp(number, "g");
    s = s.replace(regex, index);
  });

  return Number(s);
}
