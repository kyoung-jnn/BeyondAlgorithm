function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees.map((skill_tree) => {
    let skillStack = [];
    let isAnswer = true;

    for (const s of skill) {
      const curSkillOrder = skill_tree.indexOf(s);

      if (curSkillOrder >= 0) {
        // 첫번째 글자는 제외
        if (skill.indexOf(s) !== 0) {
          /* 스킬 스택이 비었다면
          선행스킬 안배움 */
          if (!skillStack.length) {
            isAnswer = false;
            break;
          }

          const preSkillOrder = skillStack[skillStack.length - 1];

          // 선행스킬보다 빠르게 배움
          if (preSkillOrder > curSkillOrder) {
            isAnswer = false;
            break;
          }
        }

        skillStack.push(curSkillOrder);
      } else {
        /* 현재 스킬이 스킬트리에 존재하지 않음
         그러므로 스킬 스택 초기화 */
        skillStack = [];
      }
    }

    if (isAnswer) {
      answer += 1;
    }
  });

  return answer;
}
