function solution(n, stations, w) {
  let answer = 0;
  const stationPower = w * 2 + 1;
  const distance = [];

  for (let i = 0; i < stations.length; i++) {
    distance.push(stations[i + 1] - w - 1 - (stations[i] + w));
  }
  distance.push(stations[0] - w - 1);
  distance.push(n - (stations[stations.length - 1] + w));

  const results = distance
    .filter((num) => num > 0 && num !== NaN)
    .map((num) => Math.ceil(num / stationPower));

  answer = results.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return answer;
}

solution(11, [4, 11], 1);
