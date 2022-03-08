function solution(N, K) {
  const queue = Array.from({ length: N }, (value, index) => index + 1); // 1씩 증가

  let count = 0;
  while (queue.length) {
    const temp = queue.shift();
    count += 1;

    if (count === K) {
      count = 0;
    } else {
      queue.push(temp);
    }
  }

  return queue[0];
}

console.log(solution(8, 3));
