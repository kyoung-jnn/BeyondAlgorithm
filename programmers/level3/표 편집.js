// 효율성 실패

/* function solution(n, k, cmd) {
  let answer = Array(n).fill("O");
  const chart = Array(n)
    .fill(0)
    .map((num, index) => index);
  const trash = [];

  let cursor = parseInt(k);

  cmd.forEach((temp) => {
    const command = temp.split(" ");

    if (command[0] === "U") {
      // 위
      cursor = cursor - parseInt(command[1]);
    } else if (command[0] === "D") {
      // 아래
      cursor = cursor + parseInt(command[1]);
    } else if (command[0] === "C") {
      // 삭제
      trash.push([cursor, chart[cursor]]);
      chart.splice(cursor, 1);

      if (chart.length === cursor) cursor -= 1; // 표의 마지막 행일 때
    } else if (command[0] === "Z") {
      // 되돌리기
      const [row, value] = trash.pop();
      chart.splice(row, 0, value);

      if (row <= cursor) cursor += 1;
    }
  });

  trash.map((item) => {
    answer[item[1]] = "X";
  });
  return answer.join("");
} */

function solution(n, k, cmd) {
  let answer = Array.from({ length: n }, () => "O");
  let cursor = Number(k);

  const nodes = { 0: [n - 1, 1] };
  const trash = [];

  // 연결 리스트 노드 생성
  for (let i = 1; i < n; i++) {
    nodes[i] = i === n - 1 ? [i - 1, 0] : [i - 1, i + 1];
  }

  cmd.forEach((commands) => {
    const command = commands.split(" ");

    let count = 0;
    if (command[0] === "U") {
      // 위
      while (count < Number(command[1])) {
        cursor = nodes[cursor][0];
        count += 1;
      }
    } else if (command[0] === "D") {
      // 아래
      while (count < Number(command[1])) {
        cursor = nodes[cursor][1];
        count += 1;
      }
    } else if (command[0] === "C") {
      // 삭제
      const temp = nodes[cursor];
      nodes[nodes[cursor][0]][1] = nodes[cursor][1];
      nodes[nodes[cursor][1]][0] = nodes[cursor][0];

      trash.push([cursor, nodes[cursor]]);
      delete nodes[cursor];

      // 마지막 행 여부 확인
      cursor = temp[1] === 0 ? temp[0] : temp[1];
    } else if (command[0] === "Z") {
      // 되돌리기
      const [index, [prev, next]] = trash.pop();

      nodes[index] = [prev, next];
      nodes[prev][1] = index;
      nodes[next][0] = index;
    }
  });

  answer = answer.map((_, index) => {
    if (!nodes[index]) {
      return "X";
    } else {
      return "O";
    }
  });

  return answer.join("");
}
