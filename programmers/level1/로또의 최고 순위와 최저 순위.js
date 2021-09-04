function check(num) {
  switch (num) {
    case 2:
      return 5;
    case 3:
      return 4;
    case 4:
      return 3;
    case 5:
      return 2;
    case 6:
      return 1;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let answer = [];
  let zeroCount = lottos.reduce((acc, cur) => {
    if (cur === 0) {
      return ++acc;
    }
    return acc;
  }, 0);

  let count = 0;
  win_nums.forEach((element) => {
    if (lottos.includes(element)) {
      count++;
    }
  });

  answer.push(check(count + zeroCount), check(count));

  return answer;
}
