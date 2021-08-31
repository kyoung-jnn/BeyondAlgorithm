function solution(name) {
  let answer = 0;
  let currentIndex = 0;

  name = name.split("");

  while (true) {
    // 탈출문
    if (name.join("") === "A".repeat(name.length)) break;

    let rightIndex = 1;
    let leftIndex = 1;

    // A가 아니라면 A로 바꾸기
    if (name[currentIndex] !== "A") {
      if (name[currentIndex].charCodeAt(0) < "N".charCodeAt(0)) {
        var count = name[currentIndex].charCodeAt(0) - "A".charCodeAt(0);
      } else {
        var count = "Z".charCodeAt(0) - name[currentIndex].charCodeAt(0) + 1;
      }
      answer += count;
      name[currentIndex] = "A";
    } else {
      // A면 "좌 우" 로 A가 아닌걸 찾는다.
      while (true) {
        if (name[(currentIndex + rightIndex) % name.length] !== "A") {
          currentIndex += rightIndex;
          answer += rightIndex;
          break;
        } else if (name[currentIndex - leftIndex] !== "A") {
          currentIndex =
            currentIndex < leftIndex
              ? name.length - (leftIndex - currentIndex)
              : currentIndex - leftIndex;
          answer += leftIndex;
          break;
        }
        rightIndex++;
        leftIndex++;
      }
    }
  }

  return answer;
}
