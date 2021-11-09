function solution(dirs) {
  const directions = {
    U: [0, -1],
    D: [0, 1],
    R: [1, 0],
    L: [-1, 0],
  };

  // 초기 위치
  const currentLocation = [0, 0];
  const visited = new Set();
  for (const dir of dirs) {
    const [x, y] = directions[dir];
    const [curX, curY] = currentLocation;
    const [nextX, nextY] = [curX + x, curY + y];

    if (-5 <= nextX && nextX <= 5 && -5 <= nextY && nextY <= 5) {
      visited.add(`${curX}${nextX}${curY}${nextY}`);
      visited.add(`${nextX}${curX}${nextY}${curY}`);

      currentLocation[0] += x;
      currentLocation[1] += y;
    }
  }

  return visited.size / 2;
}
