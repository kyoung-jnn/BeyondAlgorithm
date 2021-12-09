function solution(lines) {
  let answer = 0;

  const getSecond = (time) => {
    const splitedTime = time.split(":");
    const hour = Number(splitedTime[0] * 3600);
    const minute = Number(splitedTime[1] * 60);
    const second = Number(splitedTime[2]);

    return hour + minute + second;
  };

  const traffic = lines
    .map((line) => [
      Number(
        (
          getSecond(line.split(" ")[1]) -
          line.split(" ")[2].slice(0, -1) +
          0.001
        ).toFixed(3)
      ),
      getSecond(line.split(" ")[1]),
    ])
    .sort((a, b) => a[0] - b[0]);

  const point = [];
  traffic.forEach(([start, end]) => {
    point.push(start), point.push(end);
  });
  point.sort();

  point.forEach((startPoint) => {
    let start = startPoint;
    let end = startPoint + 1;
    let count = 0;

    traffic.forEach(([startTraffic, endTraffic]) => {
      if (
        (start <= startTraffic && startTraffic < end) ||
        (start <= endTraffic && endTraffic < end) ||
        (start >= startTraffic && endTraffic > end)
      ) {
        count += 1;
      }
    });

    if (count > answer) answer = count;
  });

  return answer;
}

solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]);
