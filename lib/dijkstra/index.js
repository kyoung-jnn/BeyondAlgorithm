const dijkstra = (n, adj) => {
  const dist = Array(n + 1).fill(false);
  const queue = [];
  queue.push({ to: 1, cost: 0 });
  dist[1] = 1; // 가중치가 1로 고정

  while (queue.length) {
    const { to, cost } = queue.shift();

    adj[to].map((nextNode) => {
      const nextCost = cost + 1;
      if (!dist[nextNode]) {
        dist[nextNode] = nextCost;
        queue.push({ to: nextNode, cost: nextCost });
      }
    });
  }
  const max = Math.max(...dist);
  return dist.filter((num) => num === max).length;
};
