function solution(string) {
  return parseInt(
    string
      .split("")
      .filter((num) => {
        if (isNaN(Number(num))) return false;
        return true;
      })
      .join("")
  );
}

console.log(solution("g0en2T0s8eSoft"));
