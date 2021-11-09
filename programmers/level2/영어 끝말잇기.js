function solution(n, words) {
  let answer = [0, 0];

  const players = Array.from({ length: n }, () => Array());
  const totalWord = [];

  let preWord = words[0][0];
  let order = 0;

  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];
    players[order].push(curWord);

    if (
      preWord.charAt(preWord.length - 1) !== curWord[0] ||
      totalWord.includes(curWord)
    ) {
      answer = [order + 1, players[order].indexOf(curWord) + 1];
      break;
    }

    order += 1;
    order %= n;
    preWord = curWord;
    totalWord.push(curWord);
  }

  return answer;
}

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
