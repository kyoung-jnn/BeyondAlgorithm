function solution(jobs) {
  let answer = 0;
  let currentIndex = 0;
  let startTime = 0;
  const priorityQueue = [];

  jobs.sort((a, b) => a[0] - b[0]);

  while (currentIndex < jobs.length || priorityQueue.length) {
    if (currentIndex < jobs.length && jobs[currentIndex][0] <= startTime) {
      priorityQueue.push(jobs[currentIndex]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      currentIndex += 1;
      continue;
    }

    if (priorityQueue.length) {
      const [start, duration] = priorityQueue.shift();
      answer += startTime + duration - start;
      startTime += duration;
    } else {
      startTime = jobs[currentIndex][0];
    }
  }

  return parseInt(answer / jobs.length);
}
