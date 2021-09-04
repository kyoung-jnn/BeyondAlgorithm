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

  numberList.forEach((element, index) => {
    while (s.includes(element)) {
      s = s.replace(element, index.toString());
    }
  });

  return parseInt(s);
}
