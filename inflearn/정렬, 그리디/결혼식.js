function solution(arr) {
  let answer = 0;
  const time_line = [];

  for (const [start, end] of arr) {
    time_line.push([start, "s"]);
    time_line.push([end, "e"]);
  }

  time_line.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    }

    return a[0] - b[0];
  });

  let count = 0;
  time_line.map(([time, type]) => {
    if (type === "s") {
      count += 1;
    } else if (type === "e") {
      count -= 1;
    }
    answer = Math.max(answer, count);
  });

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
