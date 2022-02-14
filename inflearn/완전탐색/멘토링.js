function solution(arr) {
  let answer = 0;

  let people = arr[0].length;
  for (let i = 1; i <= people; i++) {
    for (let j = 1; j <= people; j++) {
      if (i === j) continue;

      let count = 0;
      for (let k = 0; k < arr.length; k++) {
        let mentor;
        let mentee;
        for (let s = 0; s < people; s++) {
          if (arr[k][s] === i) mentor = s;
          if (arr[k][s] === j) mentee = s;
        }

        if (mentor > mentee) count += 1;
      }

      if (count === arr.length) answer += 1;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
