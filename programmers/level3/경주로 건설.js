const inRange = (x, y, N) => {
  return 0 <= x && x < N && 0 <= y && y < N;
};

function solution(board) {
  // 동서남북
  const dX = [1, -1, 0, 0];
  const dY = [0, 0, 1, -1];

  const queue = [];
  queue.push([0, 0, 0, 0]); // y x 방향 비용

  const length = board.length;
  const valueBoard = Array.from({ length: length }, () =>
    Array.from({ length: length }, () => 0)
  );

  while (queue.length) {
    let [y, x, car_d, cost] = queue.shift();

    for (let road_d = 0; road_d < 4; road_d++) {
      const nextX = x + dX[road_d];
      const nextY = y + dY[road_d];
      let newCost = 0;

      if (nextX === 0 && nextY === 0) continue;

      if (inRange(nextX, nextY, length) && board[nextY][nextX] !== 1) {
        if (cost === 0) {
          newCost += 100;
        } else {
          if (car_d !== road_d) {
            newCost = cost + 600;
          } else {
            newCost = cost + 100;
          }
        }

        if (
          valueBoard[nextY][nextX] === 0 ||
          valueBoard[nextY][nextX] >= newCost
        ) {
          valueBoard[nextY][nextX] = newCost;
          queue.push([nextY, nextX, road_d, newCost]);
        }
      }
    }
  }

  return valueBoard[length - 1][length - 1];
}

solution([
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
]);
