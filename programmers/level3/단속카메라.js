function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[1] - b[1]);

  let cameraLocation = routes[0][1];

  routes.map(([start, end], index) => {
    if (index !== 0) {
      if (cameraLocation < start) {
        cameraLocation = end;
        answer += 1;
      }
    }
  });

  return answer;
}

solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
