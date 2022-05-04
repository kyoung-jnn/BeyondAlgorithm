// 동 서 남 북

const dX = [1, -1, 0, 0];
const dY = [0, 0, 1, -1];

const inRange = (x, y) => {
  return 0 <= x && x < 5 && 0 <= y && y < 5;
};

const isManhattan = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 2 ? true : false;
};

const BFS = (place, visited) => {
  const queue = [];

  // 1. 모든 좌표 하나씩 탐색
  for (let startX = 0; startX < 5; startX++) {
    for (let startY = 0; startY < 5; startY++) {
      if (place[startY][startX] === "P") {
        queue.push([startY, startX]);

        // BFS는 반복문!
        while (queue.length) {
          let [y, x] = queue.shift();
          visited[y][x] = true;

          // 2. 동서남북 탐색
          for (let i = 0; i < 4; i++) {
            const nextX = x + dX[i];
            const nextY = y + dY[i];

            if (
              inRange(nextX, nextY) &&
              isManhattan(startX, startY, nextX, nextY) &&
              !visited[nextY][nextX]
            ) {
              if (place[nextY][nextX] === "P") {
                // 3-1. 거리내에 사람존재
                return 0;
              } else if (place[nextY][nextX] === "O") {
                queue.push([nextY, nextX]);
              }
            }
          }
        }
      }
    }
  }

  // 3-2. 모든 조건 만족
  return 1;
};

function solution(places) {
  const answer = [];

  places
    .map((place) => place.map((temp) => temp.split("")))
    .forEach((place) => {
      let visited = Array.from({ length: 5 }, () => Array(5).fill(false)); // 방문을 확인하기 위한 이중 배열 생성
      answer.push(BFS(place, visited));
    });

  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
