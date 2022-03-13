function solution(id_list, report, k) {
  const answer = Array.from({ length: id_list.length }, () => 0);
  const suspect_list = [];

  report.map((_report) => {
    const [user_id, suspect_id] = _report.split(" ");

    if (suspect_list[suspect_id]) suspect_list[suspect_id].push(user_id);
    else suspect_list[suspect_id] = [user_id];
  });

  for (const value of Object.values(suspect_list)) {
    const _ids = [...new Set(value)];
    if (_ids.length >= k) {
      _ids.map((id) => (answer[id_list.indexOf(id)] += 1));
    }
  }

  return answer;
}

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
