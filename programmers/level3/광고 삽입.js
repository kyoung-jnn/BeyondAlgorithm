const getSecond = (time) => {
  let splitTime = time.split(":");
  return parseInt(splitTime[0] * 3600 + splitTime[1] * 60 + splitTime[2] * 1); // 초로 변환
};

const getTime = (second) => {
  let h = parseInt(second / 3600);
  second %= 3600;
  let m = parseInt(second / 60);
  second %= 60;
  let s = parseInt(second);

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return h + ":" + m + ":" + s;
};

function solution(play_time, adv_time, logs) {
  let answer = 0;
  const playTime = getSecond(play_time);
  const advTime = getSecond(adv_time);

  let playList = new Array(playTime).fill(0);

  logs.forEach((time) => {
    let times = time.split("-");
    const startTime = getSecond(times[0]);
    const endTime = getSecond(times[1]);

    playList[startTime] += 1;
    playList[endTime] -= 1;
  });

  // 해당 시간, 시청자 수
  for (let i = 1; i < playTime; i++) {
    playList[i] += playList[i - 1];
  }

  // 해당 시간, 누적 재생 수
  for (let i = 1; i < playTime; i++) {
    playList[i] += playList[i - 1];
  }

  let accumulate = playList[advTime - 1];
  let currentIndex = 0;
  for (let i = 0; i < playTime; i++) {
    if (playList[i + advTime] - playList[i] > accumulate) {
      accumulate = playList[i + advTime] - playList[i];
      currentIndex = i + 1;
    }
  }

  answer = getTime(currentIndex);

  return answer;
}

solution("02:03:55", "00:14:15", [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
]);
