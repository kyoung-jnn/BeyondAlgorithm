function solution(m, n, board) {
  let answer = 0;

  board = board.map((arr) => arr.split(""));

  // 게임 시작
  while (true) {
    const remove_list = [];
    // 1. 삭제 블록 찾기
    for (let row = 1; row < m; row++) {
      for (let col = 1; col < n; col++) {
        const target = board[row][col];
        if (target === 0) continue;
        if (
          target === board[row - 1][col] &&
          target === board[row][col - 1] &&
          target === board[row - 1][col - 1]
        ) {
          remove_list.push([row, col]);
        }
      }
    }

    // 삭제할 블록이 없다면 개수 세고 탈출!
    if (!remove_list.length) {
      for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
          if (board[row][col] === 0) answer += 1;
        }
      }
      break;
    }

    // 2. 삭제 블록 0 으로 초기화
    remove_list.map(([row, col]) => {
      board[row][col] = 0;
      board[row - 1][col] = 0;
      board[row][col - 1] = 0;
      board[row - 1][col - 1] = 0;
    });

    // 3. 블록 당기기 / 중요
    for (let row = m - 1; row >= 0; row--) {
      for (let col = 0; col < n; col++) {
        if (board[row][col]) break;

        for (let i = row - 1; i >= 0; i--) {
          if (board[i][col]) {
            board[row][col] = board[i][col];
            board[i][col] = 0;
            break;
          }
        }
      }
    }
  }

  return answer;
}

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
