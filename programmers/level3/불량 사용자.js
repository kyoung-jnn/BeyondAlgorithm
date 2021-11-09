function solution(user_id, banned_id) {
  const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((item) => [item]);

    arr.forEach((num, curIndex, array) => {
      const fixed = num;
      const restArr = array.filter((item, index) => curIndex !== index);
      const restPermutation = permutation(restArr, selectNum - 1);
      const fixedPermutation = restPermutation.map((item) => [fixed, ...item]);

      result.push(...fixedPermutation);
    });

    return result;
  };

  const check = (users) => {
    for (let i = 0; i < banned_id.length; i++) {
      if (users[i].length !== banned_id[i].length) return false;
      else {
        for (let j = 0; j < users[i].length; j++) {
          if (banned_id[i][j] === "*") continue;

          if (users[i][j] !== banned_id[i][j]) return false;
        }
      }
    }
    return true;
  };

  const userSet = permutation(user_id, banned_id.length);

  const results = new Set([]);
  userSet.forEach((users) => {
    if (check(users)) {
      results.add(users.sort().join(""));
    }
  });

  return results.size;
}

solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["*rodo", "*rodo", "******"]
);
